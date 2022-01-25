import React, { useState } from "react";
import "./App.css";
import EmptyBlock from "./components/EmptyBlock";
import Phrases from "./components/Phrases";

const App = () => {
  const [listPhrase, setListPhrase] = useState([]);
  const randomPhrase = (max, min) => {
    return Math.floor(min + Math.random() * (max - min));
  };
  const buttonGeneration = () => {
    setListPhrase([
      ...listPhrase,
      adjectivesArr[randomPhrase(0, adjectivesArr.length)] +
        " " +
        adjectivesArr[randomPhrase(0, adjectivesArr.length)] +
        " " +
        nounsArr[randomPhrase(0, nounsArr.length)],
    ]);
  };
  const clearArrayRandomPhrase = () => {
    setListPhrase([]);
  };
  return (
    <div className="wrapper">
      {/* {console.log(listPhrase)} */}
      {listPhrase.length === 0 ? (
        <EmptyBlock />
      ) : (
        <Phrases listPhrase={listPhrase} />
      )}
      <button onClick={buttonGeneration} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clearArrayRandomPhrase} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
};
const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];
const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];
export default App;
