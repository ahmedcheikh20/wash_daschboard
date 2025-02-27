/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import { History, RemoveFromQueue } from "@material-ui/icons";
// import HistoryIcon from '@mui/icons-material/History';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Add Worker",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Requests",
    icon: RemoveFromQueue,

    layout: "/admin",
  },
  {
    path: "/userlist",
    name: "Users",
    icon: RemoveFromQueue,

    layout: "/admin",
  }
  ,
  {
    path: "/workers",
    name: "Workers",
    icon: "content_paste",

    layout: "/admin",
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,

    layout: "/admin",
  },
  {
    path: "/History",
    name: "History",
    icon: History,

    layout: "/admin",
  }
];

export default dashboardRoutes;
