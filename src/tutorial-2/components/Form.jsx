import React from "react";

const Form = () => {
  let email = "";
  let password = "";
  const handleChange = (event) => {
    if (event.target.type === "password") {
      return (password = event.target.value);
    } else {
      return (email = event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      console.log({ email, password });
      email = "";
      password = "";
      event.target.reset();
    } else {
      alert("Заполните все поля");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="E-mail"
          type="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Пароль"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Войти</button>
      </form>
    </>
  );
};

export default Form;
