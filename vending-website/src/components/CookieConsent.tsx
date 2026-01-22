import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

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
    necessary: true, // always true, can't be disabled
    functional: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!savedConsent) {
      // Show modal after a brief delay
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsOpen(false);

    // Here you would typically also initialize your analytics/marketing scripts
    // based on the user's preferences
    if (prefs.functional) {
      // Initialize functional cookies (e.g., analytics)
      console.log("Functional cookies enabled");
    }
    if (prefs.marketing) {
      // Initialize marketing cookies (e.g., Google Ads, Facebook Pixel)
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

  if (showSettings) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Настройки на бисквитките</DialogTitle>
            <DialogDescription>
              Изберете какви бисквитки искате да разрешите
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="necessary"
                  checked={true}
                  disabled={true}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="necessary" className="font-semibold">
                    Задължителни бисквитки (винаги активни)
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Тези бисквитки са необходими за функциониране на уебсайта и
                    не могат да бъдат изключени в нашите системи. Те обикновено
                    се залагат в отговор на действия, извършени от Вас, които
                    представляват заявка за услуги, като например настройки на
                    предпочитанията Ви за защита на личната Ви информация, вход
                    в сайта или попълване на формуляри.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="functional"
                  checked={preferences.functional}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, functional: !!checked })
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="functional" className="font-semibold">
                    Функционални бисквитки
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Тези бисквитки ни позволяват да наблюдаваме и подобряваме
                    ефективността на нашия сайт. Те ни позволяват да
                    персонализираме предлаганото съдържание и да направим
                    престоя на сайта по-приятен. Функционалните бисквитки са два
                    основни вида – аналитични и рекламни. Аналитичните ни
                    позволяват да отчитаме посещенията на сайта, да
                    идентифицираме източниците на трафик, за да видим кои части
                    от сайта са най-популярни, време на престой.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: !!checked })
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="marketing" className="font-semibold">
                    Маркетингови бисквитки
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Тези бисквитки може да се задават чрез сайта ни от наши
                    рекламни партньори или от нас, за да се изгради профил на
                    вашите интереси и да ви се показва подходящо съдържание от
                    нас и трети страни. Доставчиците на тези бисквитки са
                    следните: Google Ads, Facebook.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-col gap-2">
            <Button onClick={saveCustomPreferences} className="w-full">
              Запази избора ми
            </Button>
            <Button
              onClick={() => setShowSettings(false)}
              variant="outline"
              className="w-full"
            >
              Назад
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Политика за бисквитки и поверителност</DialogTitle>
          <DialogDescription>
            Моля, прочетете нашата политика за бисквитки и изберете вашите
            предпочитания
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Уважаеми потребители,</p>
            <p>
              Основната цел на тази страница е да Ви запознае с условията за
              използване на съдържанието в сайта bloomboxvending.com
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">Данни за търговеца:</p>
            <p>
              „Блум Бокс ООД" е дружество, регистрирано на територията на
              Република България, Тел. +359 87 7630860, mail: office@bloombox.bg
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-2">
              Какво са бисквитките?
            </h3>
            <p>
              Бисквитките са файлове с информация, която се съхранява на
              твърдия диск на компютъра Ви, в които се записва как се движите в
              даден уеб сайт, така че когато отново го посетите, да Ви представи
              определени опции, базирани на съхранената информация от последното
              Ви посещение. Бисквитките могат да се използват за анализ на
              трафика, за рекламни и маркетингови цели.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-2">
              Как ние в www.bloomboxvending.com използваме бисквитките?
            </h3>
            <p>
              Бисквитките ни служат да разберем как използвате нашия сайт. Този
              анализ ни помага да развиваме и подобряваме сайта, както и
              продуктите и услугите си и да ви предлагаме това, от което се
              нуждаете.
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold text-base mb-3">
              Бисквитките, които ние използваме:
            </h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">Задължителни бисквитки:</p>
                <p className="text-muted-foreground">
                  Тези бисквитки са от съществено значение, за да можете
                  ефективно да използвате сайта, например когато купувате
                  продукт и/или услуга и следователно не могат да бъдат
                  изключвани. Без тези бисквитки услугите, които са Ви на
                  разположение на нашия сайт, не могат да бъдат предоставени.
                </p>
              </div>

              <div>
                <p className="font-semibold">Функционални бисквитки:</p>
                <p className="text-muted-foreground">
                  Тези бисквитки ни позволяват да наблюдаваме и подобряваме
                  ефективността на нашия сайт. Те ни позволяват да
                  персонализираме предлаганото съдържание и да направим престоя
                  на сайта по-приятен.
                </p>
              </div>

              <div>
                <p className="font-semibold">Маркетингови бисквитки:</p>
                <p className="text-muted-foreground">
                  Тези бисквитки може да се задават чрез сайта ни от наши
                  рекламни партньори или от нас, за да се изгради профил на
                  вашите интереси и да ви се показва подходящо съдържание от нас
                  и трети страни. Доставчиците на тези бисквитки са следните:
                  Google Ads, Facebook.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="font-semibold mb-2">Вашият избор:</p>
            <p className="text-muted-foreground">
              Ако изберете „Приемам всички бисквитки", Вие приемате всички
              категории бисквитки и давате съгласието си да споделяме тази
              информация с трети страни, като например нашите рекламни
              партньори. Ако изберете „Само задължителни бисквитки", на Вашето
              устройство няма да бъдат поставяни други бисквитки, освен тези в
              категорията „задължителни". По всяко време можете да забраните
              бисквитките, които не са определени като задължителни за
              функционирането на сайта.
            </p>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button onClick={acceptAll} className="w-full">
            Приемам всички бисквитки
          </Button>
          <Button
            onClick={() => setShowSettings(true)}
            variant="outline"
            className="w-full"
          >
            Настройки на бисквитките
          </Button>
          <Button
            onClick={acceptNecessaryOnly}
            variant="outline"
            className="w-full"
          >
            Само задължителни бисквитки
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
