import React, { useState, useEffect } from "react";
import styles from "./index.scss";
import { Menu } from "antd";
import { Link } from "dva/router";
export default function index(props) {
  useEffect(() => {
    handleSelectedKeys();
  }, [props.props.location.pathname]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const handleSelectedKeys = () => {
    let pathname = props.props.location.pathname;
    const temp = pathname.split("/");
    const key = temp && temp.length < 2 ? "home" : temp[2];
    setSelectedKeys([key]);
  };
  return (
    <nav className={styles.header}>
      <a className={styles.logo} href="#"></a>
      <Menu
        className={styles["menu-left"]}
        mode="horizontal"
        selectedKeys={selectedKeys}
      >
        <Menu.Item key={"home"}>
          <Link to="/admin/home">主页</Link>
        </Menu.Item>
        <Menu.Item key={"menus"}>
          <Link to="/admin/menus">菜单</Link>
        </Menu.Item>
        <Menu.Item key={"admin"}>
          <Link to="/admin/admin">管理</Link>
        </Menu.Item>
        <Menu.Item key={"about"}>
          <Link to="/admin/about">关于我们</Link>
        </Menu.Item>
        <Menu.Item className={styles.login} key={"login"}>
          <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item className={styles.register} key={"register"}>
          <Link to="/register"> 注册</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}
