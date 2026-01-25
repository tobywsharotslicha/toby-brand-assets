// src/components/BrandIcon.tsx
import React from "react";
import {
  TOBY_SPRITE_1_URL,
  TOBY_SPRITE_2_URL,
  TOBY_SPRITE_3_URL,
} from "@/brand/tobyBrand";

type SpriteId = "s1" | "s2" | "s3";
type Size = "sm" | "md" | "lg" | "xl";

const sizePx: Record<Size, number> = {
  sm: 18,
  md: 24,
  lg: 32,
  xl: 44,
};

type Grid = { cols: number; rows: number; url: string };

// ✅ נמדד בפועל: כל הקבצים 2048×1365
const SPRITES: Record<SpriteId, Grid> = {
  s1: { cols: 3, rows: 3, url: TOBY_SPRITE_1_URL }, // sprite-01
  s2: { cols: 5, rows: 3, url: TOBY_SPRITE_2_URL }, // sprite-02
  s3: { cols: 3, rows: 2, url: TOBY_SPRITE_3_URL }, // sprite-03
};

// מיפוי שמות → (sprite, col, row)
const ICONS = {
  // ------- sprite-02 (5x3) -------
  home: { sprite: "s2", col: 0, row: 0 },
  schedule: { sprite: "s2", col: 1, row: 0 },
  checklist: { sprite: "s2", col: 2, row: 0 },
  user: { sprite: "s2", col: 3, row: 0 },
  calendar: { sprite: "s2", col: 4, row: 0 },

  settings: { sprite: "s2", col: 0, row: 1 },
  location: { sprite: "s2", col: 1, row: 1 },
  info: { sprite: "s2", col: 2, row: 1 },
  lock: { sprite: "s2", col: 3, row: 1 },
  heart: { sprite: "s2", col: 4, row: 1 },

  view: { sprite: "s2", col: 0, row: 2 },
  help: { sprite: "s2", col: 1, row: 2 },
  tools: { sprite: "s2", col: 2, row: 2 },
  web: { sprite: "s2", col: 3, row: 2 },
  cart: { sprite: "s2", col: 4, row: 2 },

  // ------- sprite-01 (3x3) -------
  back: { sprite: "s1", col: 0, row: 0 },
  sheets: { sprite: "s1", col: 1, row: 0 },
  next: { sprite: "s1", col: 2, row: 0 },

  chat: { sprite: "s1", col: 0, row: 1 },
  phone: { sprite: "s1", col: 1, row: 1 },
  mail: { sprite: "s1", col: 2, row: 1 },

  write: { sprite: "s1", col: 0, row: 2 },
  video: { sprite: "s1", col: 1, row: 2 },
  music: { sprite: "s1", col: 2, row: 2 },

  // ------- sprite-03 (3x2) -------
  learn: { sprite: "s3", col: 0, row: 0 },
  orchestra: { sprite: "s3", col: 1, row: 0 },
  analyze: { sprite: "s3", col: 2, row: 0 },

  ear: { sprite: "s3", col: 0, row: 1 },
  mic: { sprite: "s3", col: 1, row: 1 },
  piano: { sprite: "s3", col: 2, row: 1 },
} as const;

type IconName = keyof typeof ICONS;

function posPercent(index: number, max: number) {
  // כשיש רק עמודה אחת (לא אצלנו) -> 0%
  if (max <= 1) return "0%";
  return `${(index / (max - 1)) * 100}%`;
}

export default function BrandIcon(props: {
  name: IconName;
  size?: Size;
  className?: string;
  title?: string;
}) {
  const { name, size = "md", className, title } = props;

  const hit = ICONS[name];
  const grid = SPRITES[hit.sprite];

  const bgX = posPercent(hit.col, grid.cols);
  const bgY = posPercent(hit.row, grid.rows);

  const px = sizePx[size];

  const style: React.CSSProperties = {
    width: px,
    height: px,
    display: "inline-block",
    backgroundImage: `url("${grid.url}")`,
    backgroundRepeat: "no-repeat",
    // טריק סטנדרטי לספרייטים: מגדילים את התמונה לפי מספר התאים
    backgroundSize: `${grid.cols * 100}% ${grid.rows * 100}%`,
    backgroundPosition: `${bgX} ${bgY}`,
    // לוק “זהוב” נוכח (אפשר להסיר אם לא בא לך)
    filter: "drop-shadow(0 2px 8px rgba(230,182,92,0.18))",
  };

  return <span className={className} style={style} aria-label={title ?? name} title={title ?? name} />;
}
