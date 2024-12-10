import { createContext, ReactNode, useState } from "react";

type ChildrenI = {
  children: ReactNode
};

interface ThemeProps {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

export const ThemeContext = createContext<ThemeProps | null>(null);

export default function ThemeProvider ({ children }: ChildrenI) {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}