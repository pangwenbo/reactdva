import React from "react";
import { Route, Redirect } from "dva/router";
import NoMatch from "../components/NoMatch/index";
import dynamic from "dva/dynamic";
import { connect } from "dva";
import api from "Api";
import { getToken } from "./auth";
//动态懒加载路由
const dynamicCom = (app, models, component, routes, isAuthority, props) =>
  dynamic({
    app,
    models: () => models,
    component: () =>
      component().then((res) => {
        if (isAuthority) {
          if (getToken()) {
            if (!props.global.userInfo.id) {
              api.getAuthUser().then((res) => {
                console.log(res);
                props.dispatch({
                  type: "global/setUserInfo",
                  payload: res.data,
                });
              });
            }
          } else {
            return () => <Redirect to="/login" />;
          }
        }
        const Component = res.default || res;
        return (props) => <Component {...props} app={app} routes={routes} />;
      }),
  });
//路由组件
function SubRoutes(props) {
  return (
    <Route
      component={dynamicCom(
        props.app,
        props.model,
        props.component,
        props.routes,
        props.isAuthority,
        props
      )}
    />
  );
}
//重定向组件
export function RedirectRoute({ routes, from, exact }) {
  const routeR = routes.filter((item) => {
    return item.redirect;
  });
  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />;
}
//404组件
export function NoMatchRoute({ status = 404 }) {
  return <Route render={(props) => <NoMatch {...props} status={status} />} />;
}
export default connect(({ global }) => ({ global }))(SubRoutes);
