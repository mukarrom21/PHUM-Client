export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "<AdminDashboard />",
  },
  {
    name: "User Management",
    path: "admin",
    children: [
      {
        name: "Create Admin",
        path: "create-student",
        element: "<CreateAdmin />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "<CreateStudent />",
      },
    ],
  },
];

const newArr = adminPaths.reduce((acc, curr) => {
  if (!curr.children && curr.path && curr.element) {
    acc.push({
      path: curr.path,
      element: curr.element,
    });
  }
  if (curr.children) {
    curr.children.forEach((child) => {
      if (child.path && child.element) {
        acc.push({
          path: child.path,
          element: child.element,
        });
      }
    });
  }
  return acc;
}, []);

console.log(newArr);
