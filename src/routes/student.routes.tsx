import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import StudentDashboard from "../pages/student/StudentDashboard";
import OfferedCourse from "../pages/student/OfferedCourse";

export const studentPaths: TPaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <DashboardOutlined />,
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offer-course",
    icon: <UserOutlined />,
    element: <OfferedCourse />,
  },
  // {
  //     name: "Enrolled Course",
  //     path: "enrolled-course",
  //     icon: <UserOutlined />,
  //     element: <EnrolledCourse />,
  // },
];
