import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Default from "./layouts/Default";
import PostCreate from "./pages/posts/PostCreate";
import Login from "./pages/auth/Login";
import Posts from "./pages/posts/Posts";
import PostRead from "./pages/posts/PostRead";
import NotFoundPage from "./pages/NotFound";
import Kakao from "./pages/auth/callback/Kakao";
import Signup from "./pages/auth/Signup";
import EmailLogin from "./pages/auth/EmailLogin";
import {
  fetchUserData,
  redirectIfAuth,
  requireAuth,
} from "./loader/auth.loader";
import FullLoading from "../components/common/FullLoading";
import ErrorState from "../components/common/ErrorState";
import { fetchOverview } from "./loader/post.loader";

const router = createBrowserRouter([
  {
    Component: Default,
    // 새로고침을 했을 때 유저 정보 불러와서 zustand에 저장
    loader: fetchUserData,
    HydrateFallback: FullLoading,
    errorElement: <ErrorState />,
    children: [
      {
        path: "",
        loader: fetchOverview,
        Component: Home,
      },
      {
        path: "/posts",
        Component: Posts,
      },
      {
        path: "/create-post",
        loader: requireAuth,
        Component: PostCreate,
      },
      {
        path: "/edit/:id",
        loader: requireAuth,
        Component: PostCreate,
      },
      {
        path: "/post/:id",
        Component: PostRead,
      },
      {
        path: "/auth/login",
        loader: redirectIfAuth,
        Component: Login,
      },
      {
        path: "/auth/email-login",
        loader: redirectIfAuth,
        Component: EmailLogin,
      },
      {
        path: "/auth/signup",
        loader: redirectIfAuth,
        Component: Signup,
      },
      {
        path: "/auth/callback/kakao",
        loader: redirectIfAuth,
        Component: Kakao,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default function Route() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
