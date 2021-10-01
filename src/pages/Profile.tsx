import React, { FC } from "react";
import classes from "css/pages/Profile.module.css";
import { Layout } from "antd";

const { Content } = Layout;

const Profile: FC = () => {
  return (
    <Layout>
      <Content className={classes.profile}>User Profile</Content>
    </Layout>
  );
};

export { Profile };
