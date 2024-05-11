export type TPaths = {
  name: string;
  path?: string;
  icon?: JSX.Element;
  element?: JSX.Element;
  children?: paths[];
};

export type TRoutes = {
  path: string;
  element: JSX.Element;
};

export type TSidebarItem = {
  key: string;
  label: JSX.Element | string;
  icon?: JSX.Element;
  children?: TSidebarItem[];
};
