import React, { createContext, FC, useState } from 'react';

interface ThemeContextInterface {
  dark: boolean;
  toggleDark?: () => void;
}

type DefaultThemeProps = {
  children?: React.ReactNode;
};

const defaultState: ThemeContextInterface = {
  dark: false,
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

export const ThemeContextProvider: FC<DefaultThemeProps> = ({ children }: DefaultThemeProps) => {
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
