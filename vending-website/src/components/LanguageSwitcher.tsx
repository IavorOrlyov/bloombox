import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  LANGUAGES,
  useTranslation,
  type Language,
} from "../i18n/LanguageContext";

const FLAG_WIDTH = 20;
const FLAG_HEIGHT = 14;

function Flag({ code }: { code: Language }) {
  const common = {
    width: FLAG_WIDTH,
    height: FLAG_HEIGHT,
    viewBox: "0 0 30 21",
    "aria-hidden": true,
    style: {
      borderRadius: "2px",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
      flexShrink: 0,
    },
  } as const;

  if (code === "bg") {
    return (
      <svg {...common}>
        <rect width="30" height="7" fill="#ffffff" />
        <rect y="7" width="30" height="7" fill="#00966e" />
        <rect y="14" width="30" height="7" fill="#d62612" />
      </svg>
    );
  }
  if (code === "ro") {
    return (
      <svg {...common}>
        <rect width="10" height="21" fill="#002b7f" />
        <rect x="10" width="10" height="21" fill="#fcd116" />
        <rect x="20" width="10" height="21" fill="#ce1126" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect width="30" height="21" fill="#012169" />
      <path d="M0 0L30 21M30 0L0 21" stroke="#ffffff" strokeWidth="4" />
      <path d="M0 0L30 21M30 0L0 21" stroke="#c8102e" strokeWidth="1.6" />
      <path d="M15 0V21M0 10.5H30" stroke="#ffffff" strokeWidth="7" />
      <path d="M15 0V21M0 10.5H30" stroke="#c8102e" strokeWidth="4" />
    </svg>
  );
}

const FONT_FAMILY =
  "system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

const LABELS: Record<Language, string> = { bg: "BG", en: "EN", ro: "RO" };
const NAMES: Record<Language, string> = {
  bg: "Български",
  en: "English",
  ro: "Română",
};

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.nav.language}
        className="cursor-pointer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "5px 8px",
          fontFamily: FONT_FAMILY,
          fontSize: "13px",
          letterSpacing: "0.04em",
          fontWeight: 600,
          color: "#6c704c",
          background: "#ffffff",
          border: "1px solid rgba(108, 112, 76, 0.35)",
          borderRadius: "8px",
          whiteSpace: "nowrap",
        }}
      >
        <Flag code={language} />
        {LABELS[language]}
        <ChevronDown
          className="w-4 h-4"
          style={{
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "none",
          }}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 4px)",
            zIndex: 200,
            minWidth: "100%",
            margin: 0,
            padding: "4px",
            listStyle: "none",
            background: "#ffffff",
            border: "1px solid rgba(108, 112, 76, 0.25)",
            borderRadius: "8px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          }}
        >
          {LANGUAGES.map((code) => {
            const isActive = code === language;
            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => handleSelect(code)}
                  className="cursor-pointer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "6px 8px",
                    fontFamily: FONT_FAMILY,
          fontSize: "13px",
          letterSpacing: "0.04em",
                    fontWeight: isActive ? 700 : 500,
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    color: isActive ? "#cd3a6a" : "#6c704c",
                    background: isActive ? "rgba(108, 112, 76, 0.08)" : "transparent",
                    borderRadius: "6px",
                  }}
                  title={NAMES[code]}
                >
                  <Flag code={code} />
                  {LABELS[code]}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
