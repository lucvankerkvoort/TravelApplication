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
  let inputs = document.getElementsByClassName("search-location-input");
  console.log(inputs);
  let options = {
    types: ["(cities)"],
    componentRestrictions: { country: "us" },
  };
  let autocompletes = [];
  for (let i = 0; i < inputs.length; i++) {
    const autoComplete = new window.google.maps.places.Autocomplete(
      inputs[i].childNodes[0],
      options
    );
    autoComplete.setFields([
      "address_components",
      "formatted_address",
      "geometry",
    ]);
    autoComplete.inputId = inputs[i].id;
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery, dispatch)
    );
    autocompletes.push(autoComplete);
  }
}

async function handlePlaceSelect(updateQuery, dispatch) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
  dispatch({ type: "location", payload: addressObject.geometry.location });
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
