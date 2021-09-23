import React, { FC, useState } from "react";
import { Button, Form, Input } from "antd";
import { rules } from "utils/rules";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActions } from "hooks/useActions";

const LoginForm: FC = () => {
  const { isLoading, error } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();
  const submit = () => login(username, password);

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="username"
        name="username"
        rules={[rules.required("Input your name")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[rules.required("Input your password")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
