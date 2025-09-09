import { useThemeAction } from "../context/counter/theme/useTheme";

export default function ThemeButton() {
  const { changeTheme } = useThemeAction();

  return (
    <>
      <button onClick={changeTheme}>테마 변경</button>
    </>
  );
}
