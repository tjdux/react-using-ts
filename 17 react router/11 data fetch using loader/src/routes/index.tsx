import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Post from "./pages/post/Post";
import Default from "./layouts/Default";
import PostLoader from "./pages/post/PostLoader";
import { axiosInstance } from "../api/axios";

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
        // get 요청에서만 사용 가능
        loader: async () => {
          const { data } = await axiosInstance.get("/posts");
          return data;
        },
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
