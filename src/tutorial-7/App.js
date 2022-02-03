import React from "react";

import "./style.css";

import Article from "./components/Article";

import Home from "./pages/Home";

import About from "./pages/About";

import Header from "./components/Header";

import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/post/:id" exact element={<Article />} />

          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>No match</h1>}
          ></Route>
        </Routes>
      </>
      <br />
      <Footer />
    </div>
  );
}
