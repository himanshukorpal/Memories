import React from "react";

const Card = ({ id, title, album, year }) => {
  return (
    <div className="tc bg-washed-blue dib br2 pa2 ma2 grow  bw3 shadow=5">
      <img
        alt="memories"
        src={require(`./picturesimg/${id}.jpg`)}
        width="200x200"
      />
      <div>
        <h2>{title}</h2>
        <h3>{album}</h3>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default Card;
