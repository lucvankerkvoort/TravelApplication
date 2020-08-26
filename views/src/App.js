import React, { useContext, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home";
import Footer from "./Components/Footer";
import Jumbotron from "./Components/Jumbotron";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Search from "./Pages/search";
import "./Styles/import.scss";
import { images } from "./Images";
import { HashRouter, Route /*useHistory*/ } from "react-router-dom";
import { store } from "./Services/store";
import { db } from "./Firebase/firebase";
import Map from "./Components/GoogleMaps/maps";
import SearchLocationInput from "./Components/GoogleMaps/autocomplete";
import BecomeAGuide from "./Pages/becomeaguide";
import Testimonials from "./Components/Testimonials";
import HowItWorks from "./Components/HowItWorks";
import Contact from "./Components/Contact/contact";

const App = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  }; // our location object from earlier

  // const userData = useContext(store);
  // const { dispatch } = userData;
  // console.log(userData);
  // const history = useHistory();
  // useEffect(() => {
  // db.collection("users").doc()
  // }, [userData.state.check]);
  return (
    <div className="App">
      {/* <SearchLocationInput />
      <Map location={location} zoomLevel={17} /> */}
      {/* <HashRouter>
        <Navbar />
        <Search />
      </HashRouter> */}
      <HashRouter>
        <Navbar />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <div className="home-search">
                <SearchLocationInput />
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
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
