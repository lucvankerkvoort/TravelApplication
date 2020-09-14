import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./locationpin";
import { store } from "../../Services/store";
const Map = ({ zoomLevel }) => {
  const userData = useContext(store);
  let { location } = userData.state;
  if (!location) {
    location = JSON.parse(localStorage.getItem("location"));
  }
  console.log(typeof location.lat);
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
          defaultCenter={{
            lat:
              typeof location.lat === "number" ? location.lat : location.lat(),
            lng:
              typeof location.lng === "number" ? location.lng : location.lng(),
          }}
          defaultZoom={10}
        >
          {/* <LocationPin
            lat={location.lat()}
            lng={location.lng()}
            text={location.address}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default Map;
