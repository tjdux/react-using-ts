import { Outlet, NavLink } from "react-router";

export default function Default() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isActive ? "isActive" : "",
                  isPending ? "isPending" : "",
                  isTransitioning ? "isTransitioning" : "",
                ].join(" ")
              }
              viewTransition
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isActive ? "isActive" : "",
                  isPending ? "isPending" : "",
                  isTransitioning ? "isTransitioning" : "",
                ].join(" ")
              }
              viewTransition
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isActive ? "isActive" : "",
                  isPending ? "isPending" : "",
                  isTransitioning ? "isTransitioning" : "",
                ].join(" ")
              }
              viewTransition
            >
              Post
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
