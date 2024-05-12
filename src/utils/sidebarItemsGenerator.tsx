import { NavLink } from "react-router-dom";
import { TPaths, TSidebarItem } from "../types";

export const sidebarItemsGenerator = (paths: TPaths[], role: string) => {
  const sidebarItems: TSidebarItem[] = paths.reduce(
    (acc: TSidebarItem[], curr) => {
      if (!curr.children && curr.path && curr.element) {
        acc.push({
          key: curr.name,
          label: <NavLink to={`/${role}/${curr.path}`}>{curr.name}</NavLink>,
          icon: curr.icon,
        });
      }

      if (curr.children) {
        acc.push({
          key: curr.name,
          label: curr.name,
          icon: curr.icon,
          children: curr.children.map((child) => ({
            key: child.name,
            label: (
              <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
            ),
            icon: child.icon,
          })),
        });
      }
      return acc;
    },
    []
  );

  return sidebarItems;
};
