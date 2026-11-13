import React, { useState, useEffect } from "react";
import "./CookieConsent.css";
import { useTranslation } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = "bloombox-cookie-consent";

export function CookieConsent() {
  const { t } = useTranslation();
  const c = t.cookie;
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsOpen(false);

    if (prefs.functional) {
      console.log("Functional cookies enabled");
    }
    if (prefs.marketing) {
      console.log("Marketing cookies enabled");
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!isOpen) {
    return null;
  }

  if (showSettings) {
    return (
      <div className="cookie-consent-overlay" onClick={() => setShowSettings(false)}>
        <div className="cookie-consent-modal" onClick={(e) => e.stopPropagation()}>
          <button
            className="cookie-consent-close"
            onClick={() => setShowSettings(false)}
            aria-label={c.close}
          >
            ✕
          </button>

          <div className="cookie-consent-header">
            <h2 className="cookie-consent-title">{c.settingsTitle}</h2>
            <p className="cookie-consent-description">{c.settingsDescription}</p>
          </div>

          <div className="cookie-consent-content">
            <div className="cookie-consent-checkbox-wrapper">
              <input
                type="checkbox"
                id="necessary"
                checked={true}
                disabled={true}
                className="cookie-consent-checkbox"
              />
              <label htmlFor="necessary" className="cookie-consent-checkbox-label">
                <span className="cookie-consent-checkbox-title">
                  {c.necessaryTitle}
                </span>
                <p className="cookie-consent-checkbox-description">
                  {c.necessaryDescription}
                </p>
              </label>
            </div>

            <div className="cookie-consent-checkbox-wrapper">
              <input
                type="checkbox"
                id="functional"
                checked={preferences.functional}
                onChange={(e) =>
                  setPreferences({ ...preferences, functional: e.target.checked })
                }
                className="cookie-consent-checkbox"
              />
              <label htmlFor="functional" className="cookie-consent-checkbox-label">
                <span className="cookie-consent-checkbox-title">
                  {c.functionalTitle}
                </span>
                <p className="cookie-consent-checkbox-description">
                  {c.functionalDescription}
                </p>
              </label>
            </div>

            <div className="cookie-consent-checkbox-wrapper">
              <input
                type="checkbox"
                id="marketing"
                checked={preferences.marketing}
                onChange={(e) =>
                  setPreferences({ ...preferences, marketing: e.target.checked })
                }
                className="cookie-consent-checkbox"
              />
              <label htmlFor="marketing" className="cookie-consent-checkbox-label">
                <span className="cookie-consent-checkbox-title">
                  {c.marketingTitle}
                </span>
                <p className="cookie-consent-checkbox-description">
                  {c.marketingDescription}
                </p>
              </label>
            </div>
          </div>

          <div className="cookie-consent-footer">
            <button
              onClick={saveCustomPreferences}
              className="cookie-consent-button cookie-consent-button-primary"
            >
              {c.savePreferences}
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="cookie-consent-button cookie-consent-button-secondary"
            >
              {c.back}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-modal" style={{ maxWidth: "900px" }}>
        <div className="cookie-consent-header">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <LanguageSwitcher />
          </div>
          <h2 className="cookie-consent-title">{c.title}</h2>
          <p className="cookie-consent-description">{c.description}</p>
        </div>

        <div className="cookie-consent-content">
          <div>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              {c.greeting}
            </p>
            <p>{c.intro}</p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p className="merchant-info">{c.merchantLabel}</p>
            <p>{c.merchantInfo}</p>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <h3>{c.whatTitle}</h3>
            <p>{c.whatText}</p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h3>{c.howTitle}</h3>
            <p>{c.howText}</p>
          </div>

          <div className="cookie-consent-section">
            <h3 style={{ marginTop: 0 }}>{c.typesTitle}</h3>

            <div className="cookie-type-list">
              <div className="cookie-type-item">
                <div className="cookie-type-name">{c.necessaryName}</div>
                <p className="cookie-type-description">{c.necessaryShort}</p>
              </div>

              <div className="cookie-type-item">
                <div className="cookie-type-name">{c.functionalName}</div>
                <p className="cookie-type-description">{c.functionalShort}</p>
              </div>

              <div className="cookie-type-item">
                <div className="cookie-type-name">{c.marketingName}</div>
                <p className="cookie-type-description">
                  {c.marketingDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="cookie-consent-section">
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              {c.choiceTitle}
            </p>
            <p style={{ color: "#6b7280" }}>{c.choiceText}</p>
          </div>
        </div>

        <div className="cookie-consent-footer">
          <button
            onClick={acceptAll}
            className="cookie-consent-button cookie-consent-button-primary"
          >
            {c.acceptAll}
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="cookie-consent-button cookie-consent-button-secondary"
          >
            {c.settings}
          </button>
          <button
            onClick={acceptNecessaryOnly}
            className="cookie-consent-button cookie-consent-button-secondary"
          >
            {c.necessaryOnly}
          </button>
        </div>
      </div>
    </div>
  );
}
