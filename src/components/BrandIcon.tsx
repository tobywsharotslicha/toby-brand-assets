import React from "react";

type Sprite = "s1" | "s2" | "s3";

export type BrandIconName =
  // sprite-01
  | "chevron-left" | "sheets" | "chevron-right"
  | "chat" | "phone" | "mail-music"
  | "signature" | "video" | "music"
  // sprite-02
  | "home" | "lessons" | "tasks" | "profile" | "calendar"
  | "settings" | "location" | "info" | "lock" | "favorite"
  | "view" | "help" | "tools" | "world" | "cart"
  // sprite-03
  | "learn" | "orchestra" | "analysis"
  | "listen" | "mic" | "piano";

export default function BrandIcon({
  name,
  sprite = "s2",
  size,
  className = "",
  title,
}: {
  name: BrandIconName;
  sprite?: Sprite;
  size?: number;          // אופציונלי: override לגודל (px)
  className?: string;
  title?: string;
}) {
  const style = size ? ({ width: size, height: size } as const) : undefined;

  return (
    <span
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
      title={title}
      style={style}
      className={[
        "toby-icon",
        sprite === "s1" ? "toby-icon--s1" : sprite === "s3" ? "toby-icon--s3" : "toby-icon--s2",
        `toby-icon--${name}`,
        className,
      ].join(" ")}
    />
  );
}
