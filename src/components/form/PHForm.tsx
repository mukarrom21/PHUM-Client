import { FC } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

// types
type TDefaultValues = {
  [key: string]: string | number;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
  defaultValues?: TDefaultValues;
};
const PHForm: FC<TFormProps> = ({ onSubmit, children, defaultValues }) => {
  const options: Record<string, unknown> = {};
  if (defaultValues) {
    options["defaultValues"] = defaultValues;
  }

  const methods = useForm(options);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
