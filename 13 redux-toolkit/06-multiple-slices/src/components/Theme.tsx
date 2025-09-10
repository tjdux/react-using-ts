import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Theme() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <h1>Theme: {theme}</h1>
    </>
  );
}
