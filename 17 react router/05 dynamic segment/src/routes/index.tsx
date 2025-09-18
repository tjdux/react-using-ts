import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Default from "./pages/layouts/Default";
import Post from "./post/Post";
import PostDetail from "./post/PostDetail";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/posts/:postId",
        children: [
          {
            index: true,
            Component: Post,
          },
          {
            path: "detail/:detailId",
            Component: PostDetail,
          },
        ],
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
