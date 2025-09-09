import { createContext } from "react";

type ThemeContextType = {
  theme: string;
};

type ThemeContextActionType = {
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ThemeContextAction = createContext<ThemeContextActionType | null>(
  null
);
