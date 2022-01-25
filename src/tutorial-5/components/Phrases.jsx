import React from "react";
const Phrases = ({ listPhrase }) => {
  // console.log(listPhrase)
  return (
    <div className="list">
      {listPhrase.map((list) => (
        <div key={list} className="block">
          {list}
        </div>
      ))}
    </div>
  );
};

export default Phrases;
