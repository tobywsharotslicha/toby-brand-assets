// src/brand/tobyBrand.ts

export const TOBY_BRAND_VERSION = "v1.0.3";

export const TOBY_BRAND_CDN_BASE = `https://cdn.jsdelivr.net/gh/tobywsharotslicha/toby-brand-assets@${TOBY_BRAND_VERSION}`;

// בונה URL "בטוח" גם אם יש רווחים בשם קובץ (למשל: "light gold.png")
const cdn = (path: string) =>
  `${TOBY_BRAND_CDN_BASE}/${path
    .split("/")
    .map((p) => encodeURIComponent(p))
    .join("/")}`;

/** CSS של הטוקנים/פונטים */
export const TOBY_THEME_CSS_URL = cdn("themes/toby.css");

/** ספרייטים */
export const TOBY_SPRITE_1_URL = cdn("brand/icons/sprite/sprite-01.png");
export const TOBY_SPRITE_2_URL = cdn("brand/icons/sprite/sprite-02.png");
export const TOBY_SPRITE_3_URL = cdn("brand/icons/sprite/sprite-03.png");

/** רקעים (מתוך brand/images/background) */
export const TOBY_BG_ARD_URL = cdn("brand/images/background/ard.png");
export const TOBY_BG_BLACK_URL = cdn("brand/images/background/black.png");
export const TOBY_BG_GOLD_URL = cdn("brand/images/background/gold.png");
export const TOBY_BG_LIGHT_GOLD_URL = cdn("brand/images/background/light gold.png");
export const TOBY_BG_RED_BROWN_URL = cdn("brand/images/background/red brown.png");
export const TOBY_BG_RED_URL = cdn("brand/images/background/red.png");

/** HERO (מתוך brand/images/hero) */
export const TOBY_HERO_PIANO_FLUTE_URL = cdn("brand/images/hero/piano flute.png");
export const TOBY_HERO_STAGE_BLACK_URL = cdn("brand/images/hero/stage black.png");
export const TOBY_HERO_STAGE_BROWN_URL = cdn("brand/images/hero/stage brown.png");
export const TOBY_HERO_STAGE_DARK_URL = cdn("brand/images/hero/stage dark.png");
export const TOBY_HERO_STAGE_GOLD_URL = cdn("brand/images/hero/stage gold.png");
export const TOBY_HERO_STAGE_PIANO_URL = cdn("brand/images/hero/stage piano.png");
export const TOBY_HERO_STAGE_VIOLIN_URL = cdn("brand/images/hero/stage vilon.png");
export const TOBY_HERO_STAGE_VIOLIN2_URL = cdn("brand/images/hero/stage vilon2.png");

/** כלי נגינה (מתוך brand/images/instruments) */
export const TOBY_INST_DRUMS_URL = cdn("brand/images/instruments/drums.png");
export const TOBY_INST_EGUITAR_URL = cdn("brand/images/instruments/eguitar.png");
export const TOBY_INST_GUITAR_URL = cdn("brand/images/instruments/guitar.png");
export const TOBY_INST_PIANO_URL = cdn("brand/images/instruments/piano.png");
export const TOBY_INST_SAXOPHONE_URL = cdn("brand/images/instruments/saxophone.png");
export const TOBY_INST_VIOLIN_URL = cdn("brand/images/instruments/violin.png");

/** לוגואים (מתוך brand/logo) */
export const TOBY_LOGO_3D_URL = cdn("brand/logo/logo 3d.png");
export const TOBY_LOGO_BLACK_URL = cdn("brand/logo/logo black.jpg");
export const TOBY_LOGO_NO_REKA_URL = cdn("brand/logo/logo no reka.png");
