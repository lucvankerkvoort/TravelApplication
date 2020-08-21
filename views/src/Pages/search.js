import React from "react";
import SearchProfile from "../Components/SearchProfile/searchprofile";

const Search = () => {
  const fakeData = [
    { name: "test", location: "test 1234", rating: 4 },
    { name: "test", location: "test 1234", rating: 4 },
    { name: "test", location: "test 1234", rating: 4 },
    { name: "test", location: "test 1234", rating: 4 },
  ];
  return (
    <div className="search">
      <div className="google-maps-placeholder" />
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
