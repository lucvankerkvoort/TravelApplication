import React from "react";

const InfoBlock = ({ image, title, text, style }) => {
  return (
    <div className="info-block" style={{ justifyContent: style }}>
      {image ? (
        <div
          className="info-pic"
          style={{
            background: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      ) : null}
      <div className="info-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default InfoBlock;
