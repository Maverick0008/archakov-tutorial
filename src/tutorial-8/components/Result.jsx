import React from "react";
import { Paper } from "@mui/material";
const Result = ({formValues}) => {
  return (
    <>
      <Paper style={{ padding: "30px", fontSize: "25px" }}>
        <h2 style={{marginBottom: '20px', fontWeight: 'bold'}}>Итоговая информация:</h2>
        <ul>
          <li>
            <b>Имя:</b> {formValues.firstName}
          </li>
          <li>
            <b>Фамилия:</b> {formValues.lastName}
          </li>
          <li>
            <b>Email:</b> {formValues.email}
          </li>
          <li>
            <b>Город:</b> {formValues.city}
          </li>
          <li>
            <b>Улица:</b> {formValues.street}
          </li>
          <li>
            <b>Квартира:</b> {formValues.appartment}
          </li>
        </ul>
      </Paper>
    </>
  );
};

export default Result;
