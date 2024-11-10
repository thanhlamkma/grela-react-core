import { AuthStoreType } from '@/common/stores/AuthStore';
import { languageDefault } from '@/core/localization';

export type AllStoreType = {
  authStoreState?: AuthStoreType;
  languageStoreState?: string;
  darkThemeStoreState?: boolean;
};

export const defaultAllStoreValue: AllStoreType = {
  languageStoreState: languageDefault,
  darkThemeStoreState: false,
  authStoreState: {
    isAuthenticated: false,
    token: '',
    expiredIn: '',
    refreshToken: ''
  }
};
