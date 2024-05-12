import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { handleSubmit, register } = useForm({
    // default value
    defaultValues: {
      id: "A-0001",
      password: "123456",
    },
  });

  // call useLogin mutation
  const [login, { data, error }] = useLoginMutation();

  console.log(data);
  console.log(error);

  const onSubmit = (data) => {
    // console.log(data);
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    login(userInfo);
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
