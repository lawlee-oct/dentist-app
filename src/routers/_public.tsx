import type { RouteObject } from "react-router-dom";

import { ROUTERS } from "src/constants";
import { HomeScreen } from "src/screens";
import PublicLayout from "src/layouts";

const _publicRoutes: RouteObject[] = [
  {
    path: ROUTERS.HOME.PATH,
    element: <PublicLayout />,
    children: [{ path: ROUTERS.HOME.PATH, element: <HomeScreen /> }],
  },
];

export default _publicRoutes;
