import CommLoading from '@/common/components/CommLoading';
import { AllStoreType, defaultAllStoreValue } from '@/common/stores';
import useLocalStorage from '@/core/hooks/useLocalStorage';
import { i18nOption } from '@/core/localization';
import createI18n from '@/core/localization/createI18n';
import { LoadingProvider } from '@/core/providers/LoadingProvider';
import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  const i18n = createI18n(i18nOption);
  const [recoilState] = useLocalStorage<AllStoreType>('recoil-persist', defaultAllStoreValue);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 0
      }
    }
  });

  useEffect(() => {
    i18n.changeLanguage(recoilState.languageStoreState);
  }, [i18n, recoilState]);

  return (
    <LoadingProvider component={CommLoading}>
      <RecoilRoot>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </RecoilRoot>
    </LoadingProvider>
  );
};

export default App;
