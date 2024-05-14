import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { studentPaths } from "../../routes/student.routes";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { useAppSelector } from "../../redux/features/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  // get current user
  const user = useAppSelector(selectCurrentUser);

  // generate sidebar items
  let sidebarItems;

  // switch user role
  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      //   onBreakpoint={(broken) => {
      //     console.log(broken);
      //   }}
      //   onCollapse={(collapsed, type) => {
      //     console.log(collapsed, type);
      //   }}
    >
      {/* // add logo with text PHUM in one line */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          height: "64px",
          width: "100%",
          backgroundImage: "linear-gradient(to right, #00b09b, #96c93d)",
          marginBottom: "16px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <img
          style={{
            width: "32px",
            height: "32px",
          }}
          className=""
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <h1 className="text-xl font-bold">PHUM</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
