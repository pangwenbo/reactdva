import React, { useEffect } from "react";
import { connect } from "dva";
import styles from "./IndexPage.scss";
import NavBar from "./NavBar";
import { Switch, withRouter } from "dva/router";
import SubRoutes, { RedirectRoute, NoMatchRoute } from "../utils/SubRoutes";
import { Layout } from "antd";
const { Header, Content } = Layout;
function IndexPage(props) {
  const { routes, app } = props;
  return (
    <Layout className={styles.layout}>
      <NavBar props={props}></NavBar>
      <Content className={styles.content}>
        <Switch>
          {routes.map((route, i) => (
            // 调用封装组件
            <SubRoutes key={i} {...route} app={app} />
          ))}
          {/* <Route
            path="/home"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            path="/menus"
            render={(routeProps) => <Menus {...routeProps} />}
          />
          <Route
            path="/admin"
            render={(routeProps) => <Admin {...routeProps} />}
          />
          <Route
            path="/about"
            render={(routeProps) => <About {...routeProps} />}
          />
          <Route
            path="/login"
            render={(routeProps) => <Login {...routeProps} />}
          />
          <Route
            path="/register"
            render={(routeProps) => <Register {...routeProps} />}
          /> */}
          <RedirectRoute exact={true} from={"/admin"} routes={routes} />
          <NoMatchRoute />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(withRouter(IndexPage));
