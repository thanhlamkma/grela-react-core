import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 0
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div></div>
    </QueryClientProvider>
  );
};

export default App;
