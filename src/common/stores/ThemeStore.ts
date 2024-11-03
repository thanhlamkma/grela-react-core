import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// false => Light theme
export const themeStoreState = atom<boolean>({
  key: 'themeStoreState',
  default: false,
  effects_UNSTABLE: [persistAtom]
});
