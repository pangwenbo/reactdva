import React from "react";
import style from "./account.scss";
import Logo from "Assets/logo.jpg";
import { Card, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { setToken } from "../../utils/auth";
import api from "Api";
import md5 from "js-md5";
export default function Login(props) {
  const onFinish = (values) => {
    api
      .webLogin({ username: values.username, password: md5(values.password) })
      .then((res) => {
        console.log(res);
        if (res.errorCode === 0) {
          setToken(res.data);
          props.history.push("/admin/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // props.history.push('/admin');
    // console.log('Received values of form: ', values);
  };
  return (
    <Card title="login" className="login-form">
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="账号"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox> 记住我 </Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
