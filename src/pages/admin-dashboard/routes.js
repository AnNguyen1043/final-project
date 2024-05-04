import { lazy } from "react";
import { ADMIN_DASHBOARD_PATHS } from "./constants";

const AdminDashboard = lazy(() => import('./AdminDashboard'));

export const ADMIN_DASHBOARD_ROUTES = [
  {
    path: ADMIN_DASHBOARD_PATHS.ROOT,
    type: 'public',
    component: AdminDashboard,
  }
]