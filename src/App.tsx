import React, { FC, useEffect } from "react";
import AppRouter from "components/AppRouter";
import Navbar from "components/Navbar";
import "App.css";
import { useActions } from "hooks/useActions";
import { IUser } from "models/User";
import { MainLayout } from "layouts/MainLayout";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <AppRouter />
    </MainLayout>
  );
};

export { App };
