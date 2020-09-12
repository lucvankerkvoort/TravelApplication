import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./locationpin";
import { store } from "../../Services/store";
const Map = ({ zoomLevel }) => {
  const userData = useContext(store);
  const { location } = userData.state;
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API }}
          defaultCenter={{ lat: location.lat(), lng: location.lng() }}
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
