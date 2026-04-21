"use client";
import { useEffect, useRef, useState } from "react";

export interface WordSegment {
  text: string;
  dim?: boolean; // couleur var(--muted) = texte atténué
}

interface WordRevealProps {
  segments: WordSegment[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  style?: React.CSSProperties;
}

/**
 * Anime l'apparition du texte mot par mot au scroll
 * Reproduit exactement l'effet HarryGeorge.design :
 *   translateY(30px) + rotateX(25deg) + blur(10px) → position normale
 *   stagger 55ms/mot, duration 0.8s, cubic-bezier snappy
 */
export function WordReveal({ segments, className, as = "h2", style }: WordRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Découpe chaque segment en mots, assigne un index global pour le stagger
  let wordIdx = 0;
  const nodes: React.ReactNode[] = [];

  segments.forEach((seg, si) => {
    // Découpe en tokens (mots + espaces) pour préserver les espaces
    const tokens = seg.text.split(/(\s+)/);
    tokens.forEach((token, ti) => {
      if (!token) return;
      // Espace → simple espace
      if (/^\s+$/.test(token)) {
        nodes.push(<span key={`sp-${si}-${ti}`}>{" "}</span>);
        return;
      }
      const idx = wordIdx++;
      const delay = idx * 0.055; // 55ms de stagger entre chaque mot

      nodes.push(
        <span
          key={`w-${si}-${ti}`}
          style={{
            display: "inline-block",
            color: seg.dim ? "var(--muted)" : "inherit",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "none"
              : "translate3d(0, 30px, 0) rotateX(25deg)",
            filter: visible ? "none" : "blur(10px)",
            transformOrigin: "50% 100%",
            transition:
              "opacity 0.8s cubic-bezier(0.22,1,0.36,1), " +
              "transform 0.8s cubic-bezier(0.22,1,0.36,1), " +
              "filter 0.8s cubic-bezier(0.22,1,0.36,1)",
            transitionDelay: visible ? `${delay}s` : "0s",
          }}
        >
          {token}
        </span>
      );
    });
  });

  // Typage minimal pour les balises HTML acceptées
  const Tag = as;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{
        perspective: "600px",
        perspectiveOrigin: "50% 50%",
        ...style,
      }}
    >
      {nodes}
    </Tag>
  );
}
