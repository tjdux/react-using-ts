import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/post/Post";
import Default from "./layouts/Default";
import PostLoader from "./pages/post/PostLoader";
import { axiosInstance } from "../api/axios";
import PostLoading from "./pages/post/PostLoading";
import PostError from "./pages/post/PostError";

const router = createBrowserRouter([
  {
    Component: Default,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/post",
        Component: Post,
      },
      {
        path: "/post-loader",
        Component: PostLoader,
        loader: async () => {
          const { data } = await axiosInstance.get("/posts2");
          return data;
        },
        HydrateFallback: PostLoading,
        ErrorBoundary: PostError,
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
