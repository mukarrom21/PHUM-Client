import { Input } from "antd";
import { FC } from "react";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
const PHInput: FC<TInputProps> = ({ type, name, label }) => {
  //   const { register } = useFormContext();
  return (
    <div style={{ marginBottom: "10px" }}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        render={({ field }) => <Input type={type} id={name} {...field} />}
      />
    </div>
  );
};

export default PHInput;
