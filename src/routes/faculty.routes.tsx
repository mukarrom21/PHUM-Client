import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";

export const facultyPaths: TPaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
    icon: <DashboardOutlined />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
    icon: <UserOutlined />,
  },
];
