import React, { createContext, FC, PropsWithChildren, useState } from 'react';

interface ThemeContextInterface {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState: ThemeContextInterface = {
  dark: false,
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
