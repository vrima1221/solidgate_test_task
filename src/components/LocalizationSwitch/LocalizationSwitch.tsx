import { useState } from "react";
import styles from "./LocalizationSwitch.module.css";
import clsx from "clsx";

type Locale = {
  id: number;
  locale: string;
  value: string;
};

const locales: Locale[] = [
  {
    id: 0,
    locale: "ua",
    value: "укр",
  },
  {
    id: 1,
    locale: "en",
    value: "eng",
  },
];

const LocalizationSwitch = () => {
  const [activeLocale, setActiveLocale] = useState<Locale>(locales[0]);

  const handlocaleChange = (locale: Locale) => {
    setActiveLocale(locale);
  };

  return (
    <div className={styles.container}>
      <div className={styles.desktop}>
        {locales.map((locale) => (
          <button
            type="button"
            className={clsx(
              styles.language,
              activeLocale.id === locale.id && styles.is_active
            )}
            onClick={() => handlocaleChange(locale)}
            disabled={activeLocale.id === locale.id}
          >
            {locale.value}
          </button>
        ))}
      </div>

      <div className={styles.mobile}>
        <button type="button" className={clsx(styles.language, styles.is_active)}>
          {activeLocale.value}
        </button>
      </div>
    </div>
  );
};

export default LocalizationSwitch;
