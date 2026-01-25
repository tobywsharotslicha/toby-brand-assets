// src/components/BrandIcon.tsx
import type { ComponentPropsWithoutRef } from "react";

type SpriteId = "s1" | "s2" | "s3";
type Size = "sm" | "md" | "lg" | "xl";

type IconDef = {
  sprite: SpriteId;
  row: number; // 0-based
  col: number; // 0-based
};

const ICONS: Record<string, IconDef> = {
  /* sprite-02 (5x3) — 15 אייקונים */
  home: { sprite: "s2", row: 0, col: 0 },
  timetable: { sprite: "s2", row: 0, col: 1 }, // לוח/טבלה עם תו
  checklist: { sprite: "s2", row: 0, col: 2 },
  user: { sprite: "s2", row: 0, col: 3 },
  calendar: { sprite: "s2", row: 0, col: 4 },

  settings: { sprite: "s2", row: 1, col: 0 }, // גלגלי שיניים
  location: { sprite: "s2", row: 1, col: 1 }, // פין
  info: { sprite: "s2", row: 1, col: 2 },
  lock: { sprite: "s2", row: 1, col: 3 },
  heart: { sprite: "s2", row: 1, col: 4 },

  eye: { sprite: "s2", row: 2, col: 0 },
  help: { sprite: "s2", row: 2, col: 1 }, // סימן שאלה
  tools: { sprite: "s2", row: 2, col: 2 }, // מפתח/גלגל שיניים
  globe: { sprite: "s2", row: 2, col: 3 },
  cart: { sprite: "s2", row: 2, col: 4 },

  /* sprite-01 (3x3) */
  back: { sprite: "s1", row: 0, col: 0 }, // חץ שמאלה כפול
  sheets: { sprite: "s1", row: 0, col: 1 }, // דפים/תווים
  next: { sprite: "s1", row: 0, col: 2 }, // חץ ימינה

  chat: { sprite: "s1", row: 1, col: 0 },
  phone: { sprite: "s1", row: 1, col: 1 },
  mail: { sprite: "s1", row: 1, col: 2 },

  write: { sprite: "s1", row: 2, col: 0 }, // עט
  video: { sprite: "s1", row: 2, col: 1 },
  music: { sprite: "s1", row: 2, col: 2 },

  /* sprite-03 (3x2) */
  learn: { sprite: "s3", row: 0, col: 0 }, // ספר/יד
  orchestra: { sprite: "s3", row: 0, col: 1 },
  analyze: { sprite: "s3", row: 0, col: 2 },

  ear: { sprite: "s3", row: 1, col: 0 },
  mic: { sprite: "s3", row: 1, col: 1 },
  piano: { sprite: "s3", row: 1, col: 2 },
};

const SPRITES: Record<SpriteId, { cols: number; rows: number; w: number; h: number; file: string }> = {
  s1: { cols: 3, rows: 3, w: 2048, h: 1365, file: "sprite-01.png" },
  s2: { cols: 5, rows: 3, w: 2048, h: 1365, file: "sprite-02.png" },
  s3: { cols: 3, rows: 2, w: 2048, h: 1365, file: "sprite-03.png" },
};

export type BrandIconProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & {
  name: keyof typeof ICONS;
  size?: Size;
  /** אם לא מעבירים — נקבע לפי name */
  sprite?: SpriteId;
  /** Override ידני (בדרך כלל לא צריך) */
  row?: number;
  col?: number;

  /** jsDelivr tag, לדוגמה: "v1.0.1"  */
  tag?: string;
};

export default function BrandIcon({
  name,
  size = "md",
  sprite,
  row,
  col,
  tag = "v1.0.1",
  style,
  className,
  ...rest
}: BrandIconProps) {
  const def = ICONS[name];
  const sheet = SPRITES[sprite ?? def.sprite];

  const finalRow = row ?? def.row;
  const finalCol = col ?? def.col;

  const spriteUrl = `url("https://cdn.jsdelivr.net/gh/tobywsharotslicha/toby-brand-assets@${tag}/brand/icons/sprite/${sheet.file}")`;

  return (
    <span
      aria-hidden="true"
      className={`brand-icon ${size}${className ? ` ${className}` : ""}`}
      style={
        {
          ...(style ?? {}),
          ["--sprite-url" as any]: spriteUrl,
          ["--cols" as any]: sheet.cols,
          ["--rows" as any]: sheet.rows,
          ["--sprite-w" as any]: `${sheet.w}px`,
          ["--sprite-h" as any]: `${sheet.h}px`,
          ["--row" as any]: finalRow,
          ["--col" as any]: finalCol,
        } as React.CSSProperties
      }
      {...rest}
    />
  );
}
