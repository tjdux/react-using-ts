import { NavLink, Outlet } from "react-router";

export default function Default() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/post-loader">
            {({ isPending }) =>
              isPending ? "Post-Loader(Loading..)" : "Post-Loader"
            }
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
