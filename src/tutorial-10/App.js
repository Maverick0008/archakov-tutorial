import React, { useState } from "react";
import "./index.css";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [state, setState] = useState({
    user: false,
    userNotFound: false,
    loading: false,
    buttonDisable: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setState({
        ...state,
        user: false,
        userFoundL: false,
        loading: true,
        buttonDisable: true,
      });
      await axios
        .get(`https://api.github.com/users/${inputValue}`)
        .then((res) => {
          setUsers(res.data);
          setState({
            ...state,
            user: true,
            userNotFound: false,
            loading: false,
            buttonDisable: false,
          });
          console.log(users);
        });
    } catch (error) {
      setState({
        ...state,
        userNotFound: true,
        user: false,
        buttonDisable: false,
      });
    }
  };
  return (
    <div id="app">
      <div className="app-container">
        <div className="app-form">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button
            onClick={handleSubmit}
            className={`app-form_btn ${
              state.buttonDisable ? "disabledButton" : ""
            }`}
          >
            Найти
          </button>
        </div>

        {state.loading && <h3>Загрузка...</h3>}
        {state.userNotFound && <h3>Пользователь не найден</h3>}
        {state.user && (
          <div className="app-user">
            <div className="app-user_info">
              <div className="app-user_image">
                <img
                  className="app-user_avatar"
                  src={users.avatar_url}
                  alt=""
                />
              </div>
              <div className="app-user_data">
                <h1 className="app-user_name">
                  {users.name}
                  <span>@{users.login}</span>
                </h1>
                <p className="app-user_about">{users.bio}</p>
              </div>
            </div>
            <ul className="app-user_stats">
              <li className="app-user_stats-item">
                Репозитории
                <br />
                <span>{users.public_repos}</span>
              </li>
              <li className="app-user_stats-item">
                Подписчиков
                <br />
                <span>{users.followers}</span>
              </li>
              <li className="app-user_stats-item">
                Фоловеров
                <br />
                <span>{users.following}</span>
              </li>
            </ul>
            <ul className="app-user_location">
              <li className="app-user_location-item">{users.location}</li>
              <li className="app-user_location-item">
                <a href={users.html_url}>{users.html_url}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
