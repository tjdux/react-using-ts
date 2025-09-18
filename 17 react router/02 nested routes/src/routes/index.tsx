import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardSetting from "./pages/dashboard/DashboardSetting";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    // 중첩 라우트
    children: [
      {
        path: "",
        // path 대신 index: true도 가능 (인덱스 라우트 <- 중첩은 불가능)
        Component: DashboardHome,
      },
      {
        path: "setting", // dashboard/setting
        Component: DashboardSetting,
        children: [
          {
            path: "custom", // dashboard/setting/custom
            element: <h1>DashboardSetting Home</h1>,
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
