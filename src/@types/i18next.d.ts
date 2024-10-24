import { resources } from '@/core/localization';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Localizations {}

  type GlobalTranslationMessages = (typeof resources)['vi'] & (typeof resources)['en'];
}

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: GlobalTranslationMessages;
  }
}

export {};
