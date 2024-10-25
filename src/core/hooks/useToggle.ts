import { useCallback, useState } from 'react';

export const useToggle = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue);

  const toggle = useCallback(() => {
    setState((current) => !current);
  }, []);

  const on = useCallback(() => {
    setState(true);
  }, []);
  const off = useCallback(() => {
    setState(false);
  }, []);

  return { state, toggle, on, off };
};
