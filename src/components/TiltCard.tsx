"use client";
import { useRef, ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;   // degré de tilt max, défaut 6
  as?: "div" | "a" | "button";
  href?: string;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className,
  style,
  intensity = 6,
  as: Tag = "div",
  href,
  onClick,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width  / 2) / (width  / 2);
    const y = (e.clientY - top  - height / 2) / (height / 2);
    el.style.transform = `perspective(600px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg)`;
    el.style.borderColor = "rgba(255,255,255,0.24)";
    el.style.transition  = "border-color 0.15s ease";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform    = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    el.style.borderColor  = "";
    el.style.transition   = "transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.2s ease";
  };

  const commonStyle: React.CSSProperties = {
    transformStyle: "preserve-3d",
    willChange: "transform",
    cursor: href || onClick ? "pointer" : "default",
    ...style,
  };

  if (Tag === "a") {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={className}
        style={commonStyle}
        onMouseMove={onMove as never}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    );
  }

  const props = {
    ref,
    className,
    style: commonStyle,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
  };
  if (Tag === "div") return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  if (Tag === "button") return <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
  return <div {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
}

/* ── Arrow SVG exact HG (viewBox 0 0 15 10) ── */
export function HGArrow({ size = 13, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 15 10"
      fill={color}
      style={{ flexShrink: 0 }}
    >
      <path d="M10 10L15 5L10 0L8.83333 1.16667L11.8333 4.16667H1.66667V0.833333H0V5.83333H11.8333L8.83333 8.83333L10 10Z" />
    </svg>
  );
}

/* ── Bouton HG complet avec tilt 3D ── */
interface BtnProps {
  children: ReactNode;
  href?: string;
  ghost?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function HGButton({ children, href, ghost = false, style, onClick }: BtnProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width  / 2) / (width  / 2);
    const y = (e.clientY - top  - height / 2) / (height / 2);
    el.style.transform   = `perspective(500px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`;
    el.style.borderColor = ghost ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.30)";
    el.style.transition  = "border-color 0.1s";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform   = "";
    el.style.borderColor = "";
    el.style.transition  = "transform 0.45s cubic-bezier(0.23,1,0.32,1), border-color 0.2s ease";
  };

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'PP Neue Montreal', Arial, sans-serif",
    fontSize: 15.875,
    fontWeight: 500,
    color: ghost ? "var(--muted)" : "var(--white)",
    background: ghost ? "transparent" : "rgb(21,22,21)",
    border: ghost ? "1.5px solid rgb(28,30,28)" : "1.5px solid rgb(28,30,28)",
    borderRadius: 3,
    padding: "12px 14px",
    textDecoration: "none",
    cursor: "pointer",
    transformStyle: "preserve-3d",
    willChange: "transform",
    whiteSpace: "nowrap",
    ...style,
  };

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        style={baseStyle}
        onMouseMove={onMove as never}
        onMouseLeave={onLeave}
      >
        {children}
        <HGArrow size={12} />
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      style={baseStyle}
      onMouseMove={onMove as never}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
      <HGArrow size={12} />
    </button>
  );
}
