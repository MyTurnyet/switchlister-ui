import { useState } from 'react';

export interface ReactState<T> {
  value: T;
  setValue: (newState: T) => void;
}

export function useReactState<T>(initialState: T): ReactState<T> {
  const [value, setValue] = useState<T>(initialState);
  return { value, setValue };
}
