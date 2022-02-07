import React from "react";
import { useForm } from "react-hook-form";

import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
const scheme = yup.object().shape({
  city: yup.string().required("Укажите город!"),
  street: yup.string().required("Укажите улицу!"),
  appartment: yup.number().required("Укажите квартиру!"),
});
const Address = ({nextStep, setFormValues}) => {
  const { register, handleSubmit, formState, reset } = useForm({
      defaultValues: {
          city: '',
          street: '',
          appartment: 0
      },
    resolver: yupResolver(scheme),
  });
  const onSubmit = (values) => {
    setFormValues(prev => {
        return {...prev, ...values}
    })
    nextStep('result')
  };
  return (
    <div>
      <TextField
        {...register("city")}
        helperText={formState.errors.city && formState.errors.city.message}
        error={!!formState.errors.city}
        name="city"
        variant="standard"
        label="Город"
        fullWidth
      />
      <TextField
        {...register("street")}
        helperText={formState.errors.street && formState.errors.street.message}
        error={!!formState.errors.street}
        name="street"
        variant="standard"
        label="Улица"
        fullWidth
      />
      <TextField
        {...register("appartment")}
        helperText={
          formState.errors.appartment && formState.errors.appartment.message
        }
        error={!!formState.errors.appartment}
        name="appartment"
        variant="standard"
        label="Квартира"
        fullWidth
      />

      <br />
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
            reset({ city: "", street: "", appartment: ""})
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

export default Address;
