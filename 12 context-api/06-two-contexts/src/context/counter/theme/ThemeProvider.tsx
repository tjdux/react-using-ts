import { useState, useMemo } from "react";
import { ThemeContext, ThemeContextAction } from "./ThemeContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const memoization = useMemo(() => ({ changeTheme }), []);

  return (
    <>
      <ThemeContextAction value={memoization}>
        <ThemeContext value={{ theme }}>{children}</ThemeContext>
      </ThemeContextAction>
    </>
  );
}
