"use client";
import { ReactNode } from "react";

/* ── Arrow SVG exact HG (viewBox 0 0 15 10) ── */
export function HGArrow({ size = 12, color = "currentColor" }: { size?: number; color?: string }) {
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

/* ── TiltCard → renommé HoverCard (border hover simple, plus de 3D) ── */
interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function TiltCard({ children, className, style, onClick }: CardProps) {
  return (
    <div
      className={className}
      style={{
        transition: "border-color 0.2s ease, background 0.2s ease",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "";
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/* ── HGButton — blanc sur fond sombre, inversion au hover ── */
interface BtnProps {
  children: ReactNode;
  href?: string;
  ghost?: boolean;         // version outline (moins présent)
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function HGButton({ children, href, ghost = false, style, onClick }: BtnProps) {
  // Bouton blanc = bg #f1f1f1, texte sombre → hover: bg transparent, texte blanc
  // Ghost   = bg transparent, bordure subtile, texte muted → hover: bg #f1f1f1, texte sombre
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'PP Neue Montreal', Arial, sans-serif",
    fontSize: 15.875,
    fontWeight: 500,
    borderRadius: 3,
    padding: "11px 16px",
    textDecoration: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.22s ease, color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
    ...(ghost
      ? {
          color: "var(--muted)",
          background: "transparent",
          border: "1.5px solid rgba(255,255,255,0.12)",
        }
      : {
          color: "#131514",
          background: "#f1f1f1",
          border: "1.5px solid #f1f1f1",
        }),
    ...style,
  };

  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (ghost) {
      /* ghost sur fond sombre → légèrement plus visible */
      el.style.background  = "rgba(255,255,255,0.1)";
      el.style.color       = "#f1f1f1";
      el.style.borderColor = "rgba(255,255,255,0.35)";
      el.style.boxShadow   = "none";
    } else {
      /* bouton blanc → teinte teal subtile pour marquer l'état hover */
      el.style.background  = "#d6eff5";
      el.style.color       = "#131514";
      el.style.borderColor = "rgba(20,169,207,0.45)";
      el.style.boxShadow   = "0 0 0 2px rgba(20,169,207,0.15)";
    }
  };

  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    if (ghost) {
      el.style.background  = "transparent";
      el.style.color       = "var(--muted)";
      el.style.borderColor = "rgba(255,255,255,0.12)";
      el.style.boxShadow   = "none";
    } else {
      el.style.background  = "#f1f1f1";
      el.style.color       = "#131514";
      el.style.borderColor = "#f1f1f1";
      el.style.boxShadow   = "none";
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
        <HGArrow size={12} color="currentColor" />
      </a>
    );
  }

  return (
    <button
      style={baseStyle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
      <HGArrow size={12} color="currentColor" />
    </button>
  );
}
