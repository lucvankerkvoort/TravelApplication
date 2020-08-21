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
const App = () => {
  const userData = useContext(store);
  const { dispatch } = userData;
  console.log(userData);
  // const history = useHistory();
  // useEffect(() => {
  // db.collection("users").doc()
  // }, [userData.state.check]);
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Search />
      </HashRouter>
      {/* <HashRouter>
        <Navbar /*props={history}  />
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
      </HashRouter> */}
    </div>
  );
};

export default App;
