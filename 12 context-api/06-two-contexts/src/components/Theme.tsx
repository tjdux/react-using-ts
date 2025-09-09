import { useTheme } from "../context/counter/theme/useTheme";

export default function Theme() {
  const { theme } = useTheme();

  return (
    <>
      <h1>Theme: {theme}</h1>
    </>
  );
}
