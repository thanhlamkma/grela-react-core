import { AllStoreType } from '@/common/stores';
import { languageDefault } from '@/core/localization';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const languageStoreState = atom<AllStoreType['languageStoreState']>({
  key: 'languageStoreState',
  default: languageDefault,
  effects_UNSTABLE: [persistAtom]
});
