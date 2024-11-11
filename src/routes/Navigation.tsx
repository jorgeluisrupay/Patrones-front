import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
// import { routes } from "./routes";
import { Suspense } from "react";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...... </span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            {/* <ul>
              {routes.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul> */}
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Shopping
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            {/* {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))} */}
            <Route path={"/"} element={<ShoppingPage />} />
            <Route path={"/about"} element={<ShoppingPage />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />
            {/* <Route path="*" element={<Navigate to={routes[0].to} replace />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
