import React from "react";
import { useForm } from "react-hook-form";

import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
const scheme = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Имя должно быть больше 2-х символов")
    .required("Обязательно!"),
  lastName: yup
    .string()
    .min(3, "Фамилия должна быть больше 3-х символов")
    .required("Обязательно!"),
  email: yup.string().email("Неверная почта!").required("Укажите почту"),
  password: yup.string().when("email", {
    is: (value) => value.includes("@"),
    then: yup.string().min(6).max(32),
  }),
});
const PersonalInfoForm = ({nextStep, setFormValues}) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(scheme),
  });
  const onSubmit = (values) => {
    setFormValues(values)
    nextStep('address')
  };
  return (
    <div>
      <div className="row">
        <TextField
          {...register("firstName")}
          helperText={
            formState.errors.firstName && formState.errors.firstName.message
          }
          error={!!formState.errors.firstName}
          name="firstName"
          variant="standard"
          label="Имя"
          fullWidth
        />
        <TextField
          {...register("lastName")}
          helperText={
            formState.errors.lastName && formState.errors.lastName.message
          }
          error={!!formState.errors.lastName}
          name="lastName"
          variant="standard"
          label="Фамилия"
          fullWidth
        />
      </div>

      <div className="row">
        <TextField
          {...register("email")}
          helperText={formState.errors.email && formState.errors.email.message}
          error={!!formState.errors.email}
          name="email"
          variant="standard"
          label="E-mail"
          fullWidth
        />
        <TextField
          {...register("password")}
          helperText={
            formState.errors.password && formState.errors.password.message
          }
          error={!!formState.errors.password}
          name="password"
          type="password"
          variant="standard"
          label="Password"
          fullWidth
        />
      </div>
      <br />
      <div className="row">
        <Button
          style={{ backgroundColor: "#018F8C" }}
          onClick={handleSubmit(onSubmit)}
          variant="contained"
        >
          Далее
        </Button>
      </div>
      <div className="row buttons">
        <Button
          style={{ backgroundColor: "#F7C050" }}
          onClick={() =>
            reset({ firstName: "", lastName: "", email: "", password: "" })
          }
          variant="contained"
          color="secondary"
        >
        Очистить
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
