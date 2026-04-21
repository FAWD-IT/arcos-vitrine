"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "none";
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  id?: string;
}

export function AnimateIn({
  children,
  delay = 0,
  from = "bottom",
  className,
  style,
  as: Tag = "div",
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const translateInit =
      from === "bottom" ? "translateY(22px)"
      : from === "left"  ? "translateX(-16px)"
      : "none";

    // initial state
    el.style.opacity = "0";
    el.style.transform = translateInit;
    el.style.filter = "blur(3px)";
    el.style.transition = `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${delay}ms, filter 0.65s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "blur(0px)";
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, from]);

  // @ts-expect-error dynamic tag with ref
  return <Tag ref={ref} id={id} className={className} style={style}>{children}</Tag>;
}
