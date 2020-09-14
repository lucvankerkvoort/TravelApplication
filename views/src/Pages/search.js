import React from "react";
import SearchProfile from "../Components/SearchProfile/searchprofile";
import Map from "../Components/GoogleMaps/maps";
import { images } from "../Images";
import SearchAutocomplete from "../Components/GoogleMaps/autocomplete";
const Search = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  const fakeData = [
    { name: "test", location: "test 1234", rating: 4 },
    { name: "test", location: "test 1234", rating: 4 },
    { name: "test", location: "test 1234", rating: 4 },
    { name: "test", location: "test 1234", rating: 4 },
  ];
  return (
    <div
      className="search"
      style={{
        background: `url(${images.searchBackground})`,
        // backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="google-maps-placeholder">
        <h1>Map</h1>
        <div style={{ marginTop: "50px" }}>
          <SearchAutocomplete />
        </div>
        <Map location={location} zoomLevel={15} />
      </div>
      <div className="guides">
        <div className="guides-title">
          <h2>Available Guides</h2>
        </div>
        <div className="available-guides">
          {fakeData.map((item, i) => (
            <SearchProfile
              name={item.name}
              location={item.location}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
