import { lazy } from "react";
// import { LazyPage3, NoLazy } from "../01-lazyload/pages";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;
//permite que el Component es por lazy o no
interface Route {
  path: string;
  to: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

//es necesario usar el export default para el lazy
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
// );
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload",
    Component: LazyLayout,
    name: "lazyLayout",
  },
  {
    path: "no-lazy",
    to: "/no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
  //   {
  //     to: "/lazy1",
  //     path: "lazy1",
  //     Component: Lazy1,
  //     name: "Lazy-1",
  //   },
  //   {
  //     to: "/lazy2",
  //     path: "lazy2",
  //     Component: Lazy2,
  //     name: "Lazy-2",
  //   },
  //   {
  //     to: "/lazy3",
  //     path: "lazy3",
  //     Component: LazyPage3,
  //     name: "Lazy-3",
  //   },
];
