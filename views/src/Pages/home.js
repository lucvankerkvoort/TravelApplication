import React from "react";
import { images } from "../Images";
import { mapProps } from "recompose";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import Jumbotron from "../Components/Jumbotron";
import Contact from "../Components/Contact/contact";
const Home = () => {
  return (
    <div className="home">
      <Jumbotron pic={images.jumbotron1} text="Welcome to Locals" />
      <HowItWorks />
      <Jumbotron pic={images.jumbotron2} text="Not All Who Wander Are Lost" />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
