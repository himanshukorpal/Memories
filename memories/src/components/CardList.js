import React from "react";
import Card from "./Card";
const CardList = ({ pictures }) => {
  return (
    <div>
      {pictures.map((memory, i) => {
        return (
          <Card
            key={i}
            id={memory.id}
            title={memory.title}
            album={memory.album}
            year={memory.year}
          />
        );
      })}
    </div>
  );
};

export default CardList;
