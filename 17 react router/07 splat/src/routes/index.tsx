import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Default from "./pages/layouts/Default";
import Post from "./pages/post/Post";
import PostDetail from "./pages/post/PostDetail";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/:locale?/about",
        Component: About,
      },
      {
        // splat
        // /post로 시작하는 url은 모두 Post 컴포넌트만 보여줌
        path: "/post/*",
        Component: Post,
      },
      {
        path: "/post/:id/detail/:detail",
        Component: PostDetail,
      },
      {
        path: "*",
        element: <h1>404 Not Found!</h1>,
      },
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
