import Dashboard from "~/pages/Dashboard";
import { IRouter } from "./types";
import GroupButton from "~/pages/EditGroupButton";

export const routes: IRouter[] = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/group-button",
    component: GroupButton,
  },
];
