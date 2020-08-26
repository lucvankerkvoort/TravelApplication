import React from "react";

const InfoBlock = ({ image, title, text }) => {
  return (
    <div className="info-block">
      <div
        className="info-pic"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="info-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default InfoBlock;
