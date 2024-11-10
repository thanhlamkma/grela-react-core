import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export type AuthStoreType = {
  isAuthenticated: boolean;
  token: string;
  refreshToken?: string;
  expiredIn?: string;
};

export const authStoreDefault: AuthStoreType = {
  isAuthenticated: true,
  token: '',
  refreshToken: '',
  expiredIn: ''
};

const { persistAtom } = recoilPersist();

export const authStoreState = atom<AuthStoreType>({
  key: 'authStoreState',
  default: authStoreDefault,
  effects_UNSTABLE: [persistAtom]
});
