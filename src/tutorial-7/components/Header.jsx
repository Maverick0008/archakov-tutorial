import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h2>
        <Link to='/'>React Blog</Link>
      </h2>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Link to="/">
            Главная
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/about'>
            Обо мне
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile">
            Профиль
          </Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
