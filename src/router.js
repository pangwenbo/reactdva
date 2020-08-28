import React from "react";
import { Router, Switch } from "dva/router";
import SubRoutes, { RedirectRoute, NoMatchRoute } from "./utils/SubRoutes";
const isAuthority = true; //是否需要登录
const RouteConfig = [
  {
    path: "/admin",
    component: () => import("./pages/IndexPage"),
    model: [],
    routes: [
      {
        path: "/admin/home",
        component: () => import("./pages/Home"),
        model: [import("./models/home")],
        redirect: true,
      },
      {
        path: "/admin/menus",
        component: () => import("./pages/Menus"),
        model: [],
        isAuthority,
      },
      {
        path: "/admin/admin",
        component: () => import("./pages/Admin"),
        model: [],
        isAuthority,
      },
      {
        path: "/admin/about",
        component: () => import("./pages/Aboute"),
        model: [],
      },
    ],
  },
  {
    path: "/login",
    component: () => import("./pages/User/Login"),
    model: [],
  },
  {
    path: "/register",
    component: () => import("./pages/User/Register"),
    model: [],
  },
];
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {RouteConfig.map((route, i) => (
          <SubRoutes key={i} {...route} app={app} />
        ))}
        <RedirectRoute exact={true} from={"/"} routes={RouteConfig} />
        <NoMatchRoute />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
