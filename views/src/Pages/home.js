import React from "react";
import { images } from "../Images";
import { mapProps } from "recompose";
import InfoBlock from "../Components/InfoBlock";

const Home = () => {
  const info = [
    {
      image: images.Logo,
      title: "Test",
      text:
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
    {
      image: images.Marker,
      title: "Test",
      text:
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
    {
      image: images.Search,
      title: "Test",
      text:
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
  ];
  return (
    <div className="home">
      <div className="info">
        {info.map((item) => (
          <InfoBlock image={item.image} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Home;
