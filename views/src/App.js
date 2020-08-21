import React, { useContext, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/home";
import Footer from "./Components/Footer";
import Jumbotron from "./Components/Jumbotron";
import Register from "./Pages/register";
import Login from "./Pages/login";
import "./Styles/import.scss";
import { images } from "./Images";
import { HashRouter, Route /*useHistory*/ } from "react-router-dom";
import { store } from "./Services/store";
const App = () => {
  const userData = useContext(store);
  const { dispatch } = userData;
  console.log(userData);
  // const history = useHistory();
  useEffect(() => {});
  return (
    <div className="App">
      <HashRouter>
        <Navbar /*props={history} */ />
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
