import React, {createContext, useState, useContext} from 'react';
import {Provider as AntProvider} from '@ant-design/react-native';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({children}) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  const theme = dark ? {dark: true} : {dark: false};

  return (
    <ThemeContext.Provider value={{dark, toggleTheme}}>
      <AntProvider theme={theme}>{children}</AntProvider>
    </ThemeContext.Provider>
  );
}
