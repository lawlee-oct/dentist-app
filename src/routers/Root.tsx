import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import _privateRoutes from "./_private";
import _publicRoutes from "./_public";
import { LOCAL_STORAGE_KEY } from "src/constants";

const RootRouter: React.FC = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([..._publicRoutes]);

  const token = localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN) as string;

  useEffect(() => {
    if (token) {
      setRoutes([..._privateRoutes]);
    } else {
      setRoutes([..._publicRoutes]);
    }
  }, [token]);

  return <>{useRoutes(routes)}</>;
};

export default RootRouter;
