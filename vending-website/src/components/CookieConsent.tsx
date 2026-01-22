import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = "bloombox-cookie-consent";

export function CookieConsent() {
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
            aria-label="Close"
          >
            ✕
          </button>

          <div className="cookie-consent-header">
            <h2 className="cookie-consent-title">Настройки на бисквитките</h2>
            <p className="cookie-consent-description">
              Изберете какви бисквитки искате да разрешите
            </p>
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
                  Задължителни бисквитки (винаги активни)
                </span>
                <p className="cookie-consent-checkbox-description">
                  Тези бисквитки са необходими за функциониране на уебсайта и не
                  могат да бъдат изключени в нашите системи. Те обикновено се
                  залагат в отговор на действия, извършени от Вас, които представляват
                  заявка за услуги, като например настройки на предпочитанията Ви за
                  защита на личната Ви информация, вход в сайта или попълване на
                  формуляри.
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
                  Функционални бисквитки
                </span>
                <p className="cookie-consent-checkbox-description">
                  Тези бисквитки ни позволяват да наблюдаваме и подобряваме
                  ефективността на нашия сайт. Те ни позволяват да персонализираме
                  предлаганото съдържание и да направим престоя на сайта по-приятен.
                  Функционалните бисквитки са два основни вида – аналитични и
                  рекламни. Аналитичните ни позволяват да отчитаме посещенията на
                  сайта, да идентифицираме източниците на трафик, за да видим кои
                  части от сайта са най-популярни, време на престой.
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
                  Маркетингови бисквитки
                </span>
                <p className="cookie-consent-checkbox-description">
                  Тези бисквитки може да се задават чрез сайта ни от наши рекламни
                  партньори или от нас, за да се изгради профил на вашите интереси и
                  да ви се показва подходящо съдържание от нас и трети страни.
                  Доставчиците на тези бисквитки са следните: Google Ads, Facebook.
                </p>
              </label>
            </div>
          </div>

          <div className="cookie-consent-footer">
            <button
              onClick={saveCustomPreferences}
              className="cookie-consent-button cookie-consent-button-primary"
            >
              Запази избора ми
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="cookie-consent-button cookie-consent-button-secondary"
            >
              Назад
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
          <h2 className="cookie-consent-title">
            Политика за бисквитки и поверителност
          </h2>
          <p className="cookie-consent-description">
            Моля, прочетете нашата политика за бисквитки и изберете вашите
            предпочитания
          </p>
        </div>

        <div className="cookie-consent-content">
          <div>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              Уважаеми потребители,
            </p>
            <p>
              Основната цел на тази страница е да Ви запознае с условията за
              използване на съдържанието в сайта bloomboxvending.com
            </p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p className="merchant-info">Данни за търговеца:</p>
            <p>
              „Блум Бокс ООД" е дружество, регистрирано на територията на Република
              България, Тел. +359 87 7630860, mail: office@bloombox.bg
            </p>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <h3>Какво са бисквитките?</h3>
            <p>
              Бисквитките са файлове с информация, която се съхранява на твърдия
              диск на компютъра Ви, в които се записва как се движите в даден уеб
              сайт, така че когато отново го посетите, да Ви представи определени
              опции, базирани на съхранената информация от последното Ви посещение.
              Бисквитките могат да се използват за анализ на трафика, за рекламни и
              маркетингови цели.
            </p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h3>Как ние в www.bloomboxvending.com използваме бисквитките?</h3>
            <p>
              Бисквитките ни служат да разберем как използвате нашия сайт. Този
              анализ ни помага да развиваме и подобряваме сайта, както и продуктите
              и услугите си и да ви предлагаме това, от което се нуждаете.
            </p>
          </div>

          <div className="cookie-consent-section">
            <h3 style={{ marginTop: 0 }}>Бисквитките, които ние използваме:</h3>

            <div className="cookie-type-list">
              <div className="cookie-type-item">
                <div className="cookie-type-name">Задължителни бисквитки:</div>
                <p className="cookie-type-description">
                  Тези бисквитки са от съществено значение, за да можете ефективно
                  да използвате сайта, например когато купувате продукт и/или услуга
                  и следователно не могат да бъдат изключвани. Без тези бисквитки
                  услугите, които са Ви на разположение на нашия сайт, не могат да
                  бъдат предоставени.
                </p>
              </div>

              <div className="cookie-type-item">
                <div className="cookie-type-name">Функционални бисквитки:</div>
                <p className="cookie-type-description">
                  Тези бисквитки ни позволяват да наблюдаваме и подобряваме
                  ефективността на нашия сайт. Те ни позволяват да персонализираме
                  предлаганото съдържание и да направим престоя на сайта по-приятен.
                </p>
              </div>

              <div className="cookie-type-item">
                <div className="cookie-type-name">Маркетингови бисквитки:</div>
                <p className="cookie-type-description">
                  Тези бисквитки може да се задават чрез сайта ни от наши рекламни
                  партньори или от нас, за да се изгради профил на вашите интереси и
                  да ви се показва подходящо съдържание от нас и трети страни.
                  Доставчиците на тези бисквитки са следните: Google Ads, Facebook.
                </p>
              </div>
            </div>
          </div>

          <div className="cookie-consent-section">
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Вашият избор:</p>
            <p style={{ color: "#6b7280" }}>
              Ако изберете „Приемам всички бисквитки", Вие приемате всички категории
              бисквитки и давате съгласието си да споделяме тази информация с трети
              страни, като например нашите рекламни партньори. Ако изберете „Само
              задължителни бисквитки", на Вашето устройство няма да бъдат поставяни
              други бисквитки, освен тези в категорията „задължителни". По всяко
              време можете да забраните бисквитките, които не са определени като
              задължителни за функционирането на сайта.
            </p>
          </div>
        </div>

        <div className="cookie-consent-footer">
          <button
            onClick={acceptAll}
            className="cookie-consent-button cookie-consent-button-primary"
          >
            Приемам всички бисквитки
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="cookie-consent-button cookie-consent-button-secondary"
          >
            Настройки на бисквитките
          </button>
          <button
            onClick={acceptNecessaryOnly}
            className="cookie-consent-button cookie-consent-button-secondary"
          >
            Само задължителни бисквитки
          </button>
        </div>
      </div>
    </div>
  );
}
