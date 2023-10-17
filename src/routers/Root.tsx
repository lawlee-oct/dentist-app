import React, { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import _privateRoutes from "./_private";
import _publicRoutes from "./_public";
import { LOCAL_STORAGE_KEY, ROUTERS } from "src/constants";
import { useAppDispatch, useAppSelector } from "src/stores";
import { getMeAction } from "src/stores/screens/auth/auth.action";

const RootRouter: React.FC = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([..._publicRoutes]);

  const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) as string;
  const { meInfo, error } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (!meInfo) {
        void dispatch(getMeAction());
      }

      setRoutes([..._privateRoutes]);
    } else {
      setRoutes([..._publicRoutes]);
    }
  }, [meInfo, token]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN);
      navigate(ROUTERS.LOGIN.PATH);
    } else {
      setRoutes([..._publicRoutes]);
    }
  }, [error]);

  return <>{useRoutes(routes)}</>;
};

export default RootRouter;
