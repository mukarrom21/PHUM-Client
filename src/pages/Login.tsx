import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";

const Login = () => {
  const { handleSubmit, register } = useForm({
    // default value
    defaultValues: {
      id: "A-0001",
      password: "123456",
    },
  });

  const navigate = useNavigate();

  // call app dispatch
  const dispatch = useAppDispatch();

  // call useLogin mutation
  const [login, { error }] = useLoginMutation();

  if (error) {
    console.log(error);
  }

  // handle on submit for login
  const onSubmit = async (data: FieldValues) => {
    // add loading toast
    const toastId = toast.loading("Logging in...");

    // try catch block
    try {
      // user login info
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      // call login api
      const res = await login(userInfo).unwrap();

      // verify token and decode user info
      const tokenDecodedUserInfo = verifyToken(
        res.data.jwtAccessToken
      ) as TUser;

      // set user state
      dispatch(
        setUser({ user: tokenDecodedUserInfo, token: res.data.jwtAccessToken })
      );

      // add success toast
      toast.success("✅Login successful", { id: toastId, duration: 2000 });

      // redirect to dashboard
      if (tokenDecodedUserInfo.role) {
        // window.location.href = `${tokenDecodedUserInfo.role}/dashboard`;
        navigate(`/${tokenDecodedUserInfo.role}/dashboard`);
      }
    } catch (error) {
      toast.error("⚠️ Login failed");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="id">User ID: </label>
        <input type="text" id="id" {...register("id")} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" {...register("password")} />
        <Button htmlType="submit">Login</Button>
      </div>
    </form>
  );
};

export default Login;
