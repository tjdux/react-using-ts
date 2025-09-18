import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardSetting from "./pages/dashboard/DashboardSetting";
import Default from "./pages/layouts/Default";
import Post from "./pages/post/Post";
import PostDetail from "./pages/post/PostDetail";
import Login from "./pages/auth/Login";

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
        loader: async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        },
      },
      {
        path: "/login",
        Component: Login,
        // get 방식 사용 불가
        action: async ({ request }) => {
          const formData = await request.formData();
          const email = formData.get("email");
          const password = formData.get("password");
          console.log(email, password);
          return { message: "로그인 성공" };
        },
      },
      {
        path: "/post/*",
        Component: Post,
      },
      {
        path: "/post/:id/detail/:detail",
        Component: PostDetail,
      },
      {
        path: "/group",
        // Component: DashboardLayout,
        children: [
          {
            path: "dashboard",
            Component: Dashboard,
            children: [
              {
                index: true, // 인덱스 라우트
                Component: DashboardHome,
              },
              {
                path: "setting", // /dashboard/setting
                Component: DashboardSetting,
                children: [
                  {
                    path: "custom", // /dashboard/setting/custom
                    element: <h1>DashboardSetting Home</h1>,
                  },
                ],
              },
            ],
          },
        ],
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
