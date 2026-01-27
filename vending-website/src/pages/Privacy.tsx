import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const fontPlayfair = { fontFamily: "'Playfair Display', serif" };

export function Privacy() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <style>{`
        .privacy-back-link:hover { color: #5a5e3f; }
      `}</style>
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3rem 1rem",
          ...fontPlayfair,
        }}
      >
        <Link
          to="/"
          className="privacy-back-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#6c704c",
            marginBottom: "2rem",
            transition: "color 0.2s",
            textDecoration: "none",
            ...fontPlayfair,
          }}
        >
          <ChevronLeft style={{ width: 20, height: 20 }} />
          Назад към началната страница
        </Link>

        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "#6c704c",
            marginBottom: "0.5rem",
            ...fontPlayfair,
          }}
        >
          Политика за бисквитки и поверителност
        </h1>
        <p
          style={{
            color: "#6b7280",
            marginBottom: "3rem",
            fontSize: "0.875rem",
            ...fontPlayfair,
          }}
        >
          Последна актуализация: Януари 2026
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            color: "#374151",
            lineHeight: 1.625,
            ...fontPlayfair,
          }}
        >
          <section>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
              Уважаеми потребители,
            </p>
            <p>
              Основната цел на тази страница е да Ви запознае с условията за
              използване на съдържанието в сайта bloomboxvending.com
            </p>
          </section>

          <section>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#6c704c",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                ...fontPlayfair,
              }}
            >
              Данни за търговеца
            </h2>
            <p>
              „Блум Бокс ООД" е дружество, регистрирано на територията на
              Република България, Тел. +359 87 7630860, mail: office@bloombox.bg
            </p>
          </section>

          <section>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#6c704c",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                ...fontPlayfair,
              }}
            >
              Какво са бисквитките?
            </h2>
            <p>
              Бисквитките са файлове с информация, която се съхранява на твърдия
              диск на компютъра Ви, в които се записва как се движите в даден
              уеб сайт, така че когато отново го посетите, да Ви представи
              определени опции, базирани на съхранената информация от последното
              Ви посещение. Бисквитките могат да се използват за анализ на
              трафика, за рекламни и маркетингови цели.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#6c704c",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                ...fontPlayfair,
              }}
            >
              Как ние в www.bloomboxvending.com използваме бисквитките?
            </h2>
            <p>
              Бисквитките ни служат да разберем как използвате нашия сайт. Този
              анализ ни помага да развиваме и подобряваме сайта, както и
              продуктите и услугите си и да ви предлагаме това, от което се
              нуждаете.
            </p>
          </section>

          <section
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "2rem",
            }}
          >
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#6c704c",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                ...fontPlayfair,
              }}
            >
              Бисквитките, които ние използваме
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                    ...fontPlayfair,
                  }}
                >
                  Задължителни бисквитки (винаги активни)
                </h3>
                <p style={{ color: "#6b7280", ...fontPlayfair }}>
                  Тези бисквитки са от съществено значение, за да можете ефективно
                  да използвате сайта, например когато купувате продукт и/или
                  услуга и следователно не могат да бъдат изключвани. Без тези
                  бисквитки услугите, които са Ви на разположение на нашия сайт,
                  не могат да бъдат предоставени. Те обикновено се залагат в
                  отговор на действия, извършени от Вас, които представляват
                  заявка за услуги, като например настройки на предпочитанията Ви
                  за защита на личната Ви информация, вход в сайта или попълване
                  на формуляри.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                    ...fontPlayfair,
                  }}
                >
                  Функционални бисквитки
                </h3>
                <p style={{ color: "#6b7280", ...fontPlayfair }}>
                  Тези бисквитки ни позволяват да наблюдаваме и подобряваме
                  ефективността на нашия сайт. Те ни позволяват да
                  персонализираме предлаганото съдържание и да направим престоя
                  на сайта по-приятен. Функционалните бисквитки са два основни
                  вида – аналитични и рекламни. Аналитичните ни позволяват да
                  отчитаме посещенията на сайта, да идентифицираме източниците на
                  трафик, за да видим кои части от сайта са най-популярни, време
                  на престой.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: "0.25rem",
                    ...fontPlayfair,
                  }}
                >
                  Маркетингови бисквитки
                </h3>
                <p style={{ color: "#6b7280", ...fontPlayfair }}>
                  Тези бисквитки може да се задават чрез сайта ни от наши рекламни
                  партньори или от нас, за да се изгради профил на вашите интереси
                  и да ви се показва подходящо съдържание от нас и трети страни.
                  Доставчиците на тези бисквитки са следните: Google Ads,
                  Facebook.
                </p>
              </div>
            </div>
          </section>

          <section
            style={{
              borderTop: "1px solid #e5e7eb",
              paddingTop: "2rem",
            }}
          >
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#6c704c",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                ...fontPlayfair,
              }}
            >
              Вашият избор
            </h2>
            <p style={{ color: "#6b7280", ...fontPlayfair }}>
              Ако изберете „Приемам всички бисквитки", Вие приемате всички
              категории бисквитки и давате съгласието си да споделяме тази
              информация с трети страни, като например нашите рекламни партньори.
              Ако изберете „Само задължителни бисквитки", на Вашето устройство
              няма да бъдат поставяни други бисквитки, освен тези в категорията
              „задължителни". По всяко време можете да забраните бисквитките,
              които не са определени като задължителни за функционирането на
              сайта. Можете да управлявате предпочитанията си от модалния прозорец
              за бисквитки при първото Ви посещение на сайта.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
