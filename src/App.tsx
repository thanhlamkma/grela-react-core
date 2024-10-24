import { i18nOption } from '@/core/localization';
import createI18n from '@/core/localization/createI18n';
import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const i18n = createI18n(i18nOption);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 0
      }
    }
  });

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default App;
