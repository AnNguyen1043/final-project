import { lazy } from "react";
import { HOME_PATHS } from "./constants";

const HomePage = lazy(() => import('./Home'));

export const HOME_ROUTES = [
  {
    path: HOME_PATHS.ROOT,
    type: 'public',
    component: HomePage,
  }
]