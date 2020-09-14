import React, { useContext, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Chat from "./Pages/chat";
import Home from "./Pages/home";
import Footer from "./Components/Footer";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Search from "./Pages/search";
import "./Styles/import.scss";
import { HashRouter, Route } from "react-router-dom";
import { store } from "./Services/store";
import BecomeAGuide from "./Pages/becomeaguide";
import SearchAutocomplete from "./Components/GoogleMaps/autocomplete";

const App = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
  document.head.append(script);

  const userData = useContext(store);
  const { dispatch } = userData;

  console.log(userData);
  // console.log(userData);
  // const history = useHistory();
  // console.log(history);
  useEffect(() => {
    // db.collection("users").doc()
  }, [userData.state.check]);
  return (
    <div className="App">
      {/* <HashRouter>
        <Navbar />
        <Chat />
      </HashRouter> */}
      <HashRouter>
        <Navbar />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <div className="home-search">
                <SearchAutocomplete />
              </div>
              <Home {...props} />
            </>
          )}
        />
        <Route
          path="/guide-reg"
          render={(props) => <BecomeAGuide {...props} />}
        />
        <Route path="/search" render={(props) => <Search {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Route path="/chat" render={(props) => <Chat {...props} />} />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
