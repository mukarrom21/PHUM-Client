import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { TPaths, TRoutes, TSidebarItem } from "../types";
import {
  UserOutlined,
  UserAddOutlined,
  DashboardTwoTone,
} from "@ant-design/icons";

export const adminPaths: TPaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <DashboardTwoTone />,
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    icon: <UserOutlined />,
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        icon: <UserAddOutlined />,
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        icon: <UserAddOutlined />,
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        icon: <UserAddOutlined />,
        element: <CreateStudent />,
      },
    ],
  },
];
// export const adminPaths = [
//   {
//     index: true,
//     element: <AdminDashboard />,
//   },
//   {
//     path: "dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "create-student",
//     element: <CreateStudent />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];

// export const adminRoutes: TRoutes[] = adminPaths.reduce(
//   (acc: TRoutes[], curr) => {
//     if (curr.children) {
//       curr.children.forEach((child) => {
//         if (child.path && child.element) {
//           acc.push({
//             path: child.path,
//             element: child.element,
//           });
//         }
//       });
//     }
//     if (curr.path && curr.element) {
//       acc.push({
//         path: curr.path,
//         element: curr.element,
//       });
//     }

//     return acc;
//   },
//   []
// );

// export const adminSidebarItems: TSidebarItem[] = adminPaths.reduce(
//   (acc: TSidebarItem[], curr) => {
//     if (!curr.children && curr.path && curr.element) {
//       acc.push({
//         key: curr.name,
//         label: <NavLink to={`/admin/${curr.path}`}>{curr.name}</NavLink>,
//         icon: curr.icon,
//       });
//     }

//     if (curr.children) {
//       acc.push({
//         key: curr.name,
//         label: curr.name,
//         icon: curr.icon,
//         children: curr.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//           icon: child.icon,
//         })),
//       });
//     }
//     return acc;
//   },
//   []
// );
