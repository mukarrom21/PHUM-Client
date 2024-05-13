import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/features/hooks";

const Protected = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector((state) => state.auth.token);
  console.log(token);

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

export default Protected;
