import React from "react";
import InfiniteScroll from "./animations/InfiniteScroll";

const AboutMe = () => {
  const items = [
    {
      content: (
        <div className="bg-gray-100 flex items-center justify-center">
          <p>Galois Honour Roll</p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center justify-center">
          <p>Top 100 in Canada for Rubik's Cube</p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center justify-center">
          <p>Chess Enthusiast (2000+ Elo)</p>
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center justify-center">
          <p>Musician (Piano + Cello + Trumpet)</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <InfiniteScroll
        items={items}
        autoplay={true}
        autoplaySpeed={1}
        autoplayDirection="left"
        itemMinWidth={250}
        pauseOnHover={true}
      />
    </div>
  );
};

export default AboutMe;
