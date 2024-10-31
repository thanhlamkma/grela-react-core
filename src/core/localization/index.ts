import { SupportedLanguage } from '@/core/localization/constant';
import globalLocales from '@/core/localization/locales';
import dayjs, { isDayjs } from 'dayjs';
import { InitOptions } from 'i18next';
import { camelCase, kebabCase } from 'lodash-es';

export const languageDefault = SupportedLanguage.EN;

export { SupportedLanguage };

export const resources = {
  [SupportedLanguage.VI]: globalLocales.vi,
  [SupportedLanguage.EN]: globalLocales.en,
  [SupportedLanguage.KO]: globalLocales.ko
};

export const i18nOption: InitOptions = {
  fallbackLng: languageDefault,
  lng: languageDefault,
  debug: false,
  ns: Object.keys(resources),
  resources,
  interpolation: {
    escapeValue: false,
    format: (value, format) => {
      if (typeof value === 'string') {
        switch (format) {
          case 'uppercase':
            return value.toUpperCase();
          case 'lowercase':
            return value.toLowerCase();
          case 'firstLetterUppercase':
            return value.charAt(0).toUpperCase() + value.slice(1);
          case 'pascalCase':
            return value.charAt(0).toUpperCase() + camelCase(value.slice(1));
          case 'camelCase':
            return camelCase(value);
          case 'kebabCase':
            return kebabCase(value);
        }
      }

      if (isDayjs(value) || value instanceof Date) {
        return dayjs(value).format(format);
      }

      return value;
    }
  }
};
