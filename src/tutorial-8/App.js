import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { TextField, Button } from "@mui/material";

const App = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <>
      <div className="row">
        <TextField
          {...register("firstName", { required: "Это обязательное поле" })}
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
          {...register("lastName", { required: "Это обязательное поле" })}
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
          {...register("email", { required: "Это обязательное поле", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Некорректный email"
          } })}
          helperText={
            formState.errors.email && formState.errors.email.message
          }
          error={!!formState.errors.email}
          name="email"
          variant="standard"
          label="E-mail"
          fullWidth
        />
        <TextField
        {...register("password", { required: "Это обязательное поле" })}
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
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Зарегистрироваться
        </Button>
      </div>
      <div className="row">
        <Button onClick={() => reset({firstName: '', lastName: '', email: '', password: ''})} variant="contained" color="secondary">
          Очистить
        </Button>
      </div>
    </>
  );
};

export default App;
