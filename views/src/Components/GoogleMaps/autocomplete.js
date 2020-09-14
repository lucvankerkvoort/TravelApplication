import React, { useContext } from "react";
import { store } from "../../Services/store";
import Autocomplete from "react-google-autocomplete";
import { useHistory } from "react-router-dom";
import { images } from "../../Images";

const SearchAutocomplete = () => {
  const history = useHistory();
  const userData = useContext(store);
  const { dispatch } = userData;
  return (
    <div className="search-autocomplete">
      <Autocomplete
        style={{ width: "100%", height: "25px", padding: "5px" }}
        onPlaceSelected={(place) => {
          localStorage.setItem(
            "location",
            JSON.stringify(place.geometry.location)
          );
          dispatch({
            type: "location",
            payload: place.geometry.location,
          });
        }}
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API}
        types={["(cities)"]}
        componentRestrictions={{ country: "us" }}
      />
      <button
        onClick={() => {
          if (history.location.pathname !== "/search") {
            history.push("/search");
          } else {
            window.location.reload();
          }
        }}
      >
        <img src={images.Search} alt="..." />
      </button>
    </div>
  );
};

export default SearchAutocomplete;
