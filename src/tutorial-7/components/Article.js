import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Article = () => {
    let {id} = useParams();
      
  return (
      
    <div>
      <h1>Статья №{id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        distinctio fuga animi aliquam sit id veritatis, doloribus ducimus quas,
        dignissimos non minima quia amet possimus? Impedit nemo ducimus fuga
        rem!
      </p>
      <Link to="/">
        <button>Назад</button>
      </Link>
    </div>
  );
};

export default Article;
