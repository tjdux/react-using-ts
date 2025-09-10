import { useDispatch } from "react-redux";
import { changeTheme } from "../store/features/theme/themeSlice";

export default function ThemeButton() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(changeTheme())}>테마 변경</button>
    </>
  );
}
