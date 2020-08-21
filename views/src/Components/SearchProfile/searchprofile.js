import React from "react";

const SearchProfile = ({ name, location, rating }) => {
  return (
    <div className="search-profile">
      <div
        className="profile-pic"
        style={{
          background: `url(https://via.placeholder.com/150)`,
          backgroundSize: "cover",
        }}
      />
      <div className="profile-info">
        <p>Name:{name}</p>
        <p>Location:{location}</p>
        <p>Rating:{rating}</p>
      </div>

      <button>See Profile</button>
    </div>
  );
};

export default SearchProfile;
