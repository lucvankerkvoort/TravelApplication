import React, { useState, useEffect, useRef, useContext } from "react";
import { images } from "../../Images";
import { useHistory } from "react-router-dom";
import { store } from "../../Services/store";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef, dispatch) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields([
    "address_components",
    "formatted_address",
    "geometry",
  ]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, dispatch)
  );
}

async function handlePlaceSelect(updateQuery, dispatch) {
  // const userData = useContext(store);
  // const { dispatch } = userData;
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  dispatch({ type: "location", payload: addressObject.geometry.location });
  // console.log(addressObject);
}

function SearchLocationInput({ disabled, setCity }) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const userData = useContext(store);
  const { dispatch } = userData;
  console.log(userData.state);

  const history = useHistory();
  const isInvalid = query == "";
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, dispatch)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={(event) => {
          if (setCity) {
            setCity(event.target.value);
          }
          setQuery(event.target.value);
        }}
        placeholder="Enter a City"
        value={query}
      />

      {disabled ? null : (
        <button disabled={isInvalid} onClick={() => history.push("/search")}>
          <img src={images.Search} alt="..." />
        </button>
      )}
    </div>
  );
}

export default SearchLocationInput;
