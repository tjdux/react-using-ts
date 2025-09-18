import { Outlet } from "react-router";

export default function Default() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
