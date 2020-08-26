import React from "react";
import InfoBlock from "../InfoBlock";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Patrick",
      text:
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
    {
      name: "Jason",
      text:
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
    {
      name: "Luc",
      text:
        "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",
    },
  ];
  return (
    <>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-section">
          {testimonials.map((item) => (
            <InfoBlock title={item.name} text={item.text} style="center" />
          ))}
        </div>
      </div>
    </>
  );
};
export default Testimonials;
