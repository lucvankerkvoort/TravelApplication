import React from "react";

const Jumbotron = ({ pic, text }) => {
  return (
    <div
      className="jumbotron"
      style={{
        background: `url(${pic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default Jumbotron;
