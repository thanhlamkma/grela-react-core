import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

export default function createI18n(options: InitOptions) {
  const i18n = i18next.createInstance().use(initReactI18next);
  i18n.init({ ...options });

  return i18n;
}
