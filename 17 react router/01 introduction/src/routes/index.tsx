import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

// router: 라우터 인스턴스 객체
const router = createBrowserRouter([
  // 라우트 객체
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post",
    element: <h1>Post Page</h1>,
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
