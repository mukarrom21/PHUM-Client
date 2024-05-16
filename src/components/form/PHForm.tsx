import { FC } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

// type
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
};
const PHForm: FC<TFormProps> = ({ onSubmit, children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
