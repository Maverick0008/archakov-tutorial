import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Form = ({ onButtonSubmit }) => {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    text: "",
    createAt: "",
  });
  let data = new Date();
  const onInputValue = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, [e.target.name]: value, createAt: data });
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    if (inputValue.fullName && inputValue.text) {
      onButtonSubmit(inputValue);
      setInputValue({
        fullName: "",
        email: "",
        text: "",
      });
    } else {
      alert("Не заполнены поля");
    }
  };

  return (
    <form onSubmit={onClickSubmit}>
      <Grid
        sx={{
          p: "16px",
          border: "1px solid #F0F0F0",
          borderRadius: "3px",
          marginTop: "30px",
          width: "365px",
        }}
      >
        <Typography
          variant="h6"
          component="h6"
          color="#252322"
          fontWeight="bold"
        >
          Обратная связь:
        </Typography>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "calc(100% - 10px)" },
          }}
        >
          <TextField
            sx={{ margin: "10px" }}
            id="outlined-basic"
            label="Имя"
            name="fullName"
            onChange={onInputValue}
            value={inputValue.fullName}
          />
          <TextField
            onChange={onInputValue}
            value={inputValue.email}
            sx={{ margin: "10px" }}
            id="outlined-basic"
            label="Почта"
            name="email"
          />
          <TextField
            onChange={onInputValue}
            value={inputValue.text}
            sx={{ margin: "10px" }}
            id="outlined-multiline-static"
            label="Текст..."
            multiline
            rows={4}
            name="text"
          />{" "}
        </Box>
        <Button type="submit" variant="contained" sx={{ marginLeft: "10px" }}>
          ОТПРАВИТЬ
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
