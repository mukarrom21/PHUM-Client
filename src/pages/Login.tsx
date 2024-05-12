import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const { handleSubmit, register } = useForm({
    // default value
    defaultValues: {
      id: "A-0001",
      password: "123456",
    },
  });

  // call app dispatch
  const dispatch = useAppDispatch();

  // call useLogin mutation
  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap(); // { data: { user: { id: 1, name: '...' } } }

    const tokenDecodedUserInfo = verifyToken(res.data.jwtAccessToken);

    dispatch(
      setUser({ user: tokenDecodedUserInfo, token: res.data.jwtAccessToken })
    );
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
