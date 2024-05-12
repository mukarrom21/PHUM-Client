import { TPaths, TRoutes } from "../types";

export const routesGenerator = (pathsItem: TPaths[]) => {
  const routes: TRoutes[] = pathsItem.reduce((acc: TRoutes[], curr) => {
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
    if (curr.path && curr.element) {
      acc.push({
        path: curr.path,
        element: curr.element,
      });
    }

    return acc;
  }, []);

  return routes;
};
