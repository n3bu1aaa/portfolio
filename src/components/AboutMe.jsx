import React from "react";
import InfiniteScroll from "./animations/InfiniteScroll";

const AboutMe = () => {
  const items = [
    {
      content: (
        <div className="bg-gray-100 flex items-center justify-center rounded-lg">
          <p>Galois Honour Roll</p>
          <br></br>
          <br></br>
          <p>Group V of the 2025 Galois Waterloo Math Contest</p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
          <p>Top 100 in Canada for Rubik's Cube</p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
          <p>Chess Enthusiast (2000+ Elo)</p>
        </div>
      ),
    },
    {
      content: (
        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
          <p>Musician (Piano + Cello + Trumpet)</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <p className="text-5xl font-bold text-center">Fun Facts</p>
      <InfiniteScroll
        items={items}
        autoplay={true}
        autoplaySpeed={1}
        autoplayDirection="left"
        pauseOnHover={true}
      />
    </div>
  );
};

export default AboutMe;
