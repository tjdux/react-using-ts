import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardSetting from "./pages/dashboard/DashboardSetting";
import Default from "./pages/layouts/Default";
import DashboardLayout from "./pages/layouts/DashboardLayout";

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
        Component: DashboardLayout,
        children: [
          {
            path: "/dashboard",
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
