import React from "react";
import { images } from "../../Images/";
const LocationPin = ({ text }) => (
  <div className="pin">
    <img src={images.Marker} alt="..." width="50px" height="50px" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
