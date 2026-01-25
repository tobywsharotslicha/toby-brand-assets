// src/brand/BrandProvider.tsx
import { useEffect } from "react";
import { TOBY_THEME_CSS_URL } from "./tobyBrand";

export default function BrandProvider() {
  useEffect(() => {
    const id = "toby-brand-theme";

    // אם כבר נטען – לא להוסיף שוב
    if (document.getElementById(id)) return;

    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = TOBY_THEME_CSS_URL;

    document.head.appendChild(link);

    return () => {
      // לא חובה להסיר; אבל נחמד בניקוי
      // document.getElementById(id)?.remove();
    };
  }, []);

  return null;
}
