import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home";
import Footer from "./Components/Footer";
import Jumbotron from "./Components/Jumbotron";
import Login from "./Pages/login";
import Register from "./Pages/register";
import "./Styles/import.scss";
import { images } from "./Images";
import { HashRouter, Route, useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  return (
    <div className="App">
      <HashRouter>
        <Navbar props={history} />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <Jumbotron pic={images.jumbotron1} text="Welcome to Locals" />
              <Home {...props} />
            </>
          )}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
