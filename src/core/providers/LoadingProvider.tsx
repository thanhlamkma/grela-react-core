import { useToggle } from '@/core/hooks/useToggle';
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

export type LoadingContextType = {
  startLoading: () => void;
  stopLoading: () => void;
  state: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type LoadingComponentType<T = {}> = React.ComponentType<
  {
    state: boolean;
    color?: string;
    children?: ReactNode;
  } & T
>;

export interface LoadingProviderProps {
  color?: string;
  component: LoadingComponentType;
  children?: ReactNode;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children, color, component: Component }: LoadingProviderProps) {
  const { state, on: turnOnLoading, off: turnOffLoading } = useToggle();
  const setCount = useState(0)[1];

  const startLoading = useCallback(() => {
    turnOnLoading();
    setCount((cur) => cur + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopLoading = useCallback(() => {
    setCount((cur) => {
      if (cur === 1) {
        turnOffLoading();
        return 0;
      }

      return cur > 0 ? cur - 1 : cur;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, state }}>
      <Component state={state} color={color}>
        {children}
      </Component>
    </LoadingContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = (state?: boolean) => {
  const context = useContext<LoadingContextType | undefined>(LoadingContext);

  if (context === undefined) {
    throw new Error('useLoading must be used in LoadingProvider');
  }

  useEffect(() => {
    if (typeof state === 'undefined') {
      return;
    }

    if (state) {
      context.startLoading();
    } else {
      context.stopLoading();
    }
  }, [state, context]);

  return context;
};
