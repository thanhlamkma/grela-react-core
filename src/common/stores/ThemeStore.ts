import { AllStoreType } from '@/common/stores';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// false => Light theme
export const darkThemeStoreState = atom<AllStoreType['darkThemeStoreState']>({
  key: 'themeStoreState',
  default: false,
  effects_UNSTABLE: [persistAtom]
});
