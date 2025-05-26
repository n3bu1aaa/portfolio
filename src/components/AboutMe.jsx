import React from "react";
import { useState } from "react";
import video from "../assets/videos/cube_solve.mp4";
import chess from "../assets/images/chess.png";
import piano from "../assets/images/piano.png";
import math from "../assets/images/math.png";

const AboutMe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const content = [
    <div>
      <div className="flex items-center justify-center mb-4">
        <img
          src={math}
          alt="Piano"
          className="rounded-lg shadow-2xl mt-8 h-7/8 w-7/8 border-solid border-2 border-blue-900"
        />
      </div>
      <p>
        The questions of the 2025 Galois Math Contest, made by the University of
        Waterloo.
      </p>
    </div>,
    <div>
      <div className="flex items-center justify-center mb-4">
        <video
          autoPlay
          controls
          muted
          loop
          width={300}
          className="rounded-lg shadow-2xl mt-4 h-3/4 w-3/4 border-solid border-2 border-blue-900"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <p>A video of me solving a Rubik's cube in 5.237 seconds.</p>
      <p>This solve was done on August 13th, 2024.</p>
    </div>,
    <div>
      <div className="flex items-center justify-center mb-4">
        <img
          src={chess}
          alt="Chess"
          className="rounded-lg shadow-2xl mt-4 h-5/8 w-5/8 border-solid border-2 border-blue-900"
        />
      </div>
      <p>An image of one of my best games I played on Lichess.</p>
    </div>,
    <div>
      <div className="flex items-center justify-center mb-4">
        <img
          src={piano}
          alt="Piano"
          className="rounded-lg shadow-2xl mt-15 h-7/8 w-7/8 border-solid border-2 border-blue-900"
        />
      </div>
      <p>A picture of me playing the piano at a recital in 2019.</p>
    </div>,
  ];
  return (
    <div className="bg-[#FFEFEF]">
      <div className="h-[620px] w-[1200px] mx-auto">
        <p className="text-4xl font-semibold text-center mb-8 pt-16">
          Fun Facts
        </p>
        <div className="grid grid-cols-[350px_1fr] gap-6 h-145">
          <div className="grid grid-rows-4 gap-8">
            <div
              className={`bg-gray-200 rounded-lg flex items-center justify-center p-4 cursor-pointer hover:bg-gray-100 ${
                hoveredIndex === 0
                  ? "ring-4 ring-blue-400 scale-[1.02] transition-all duration-200 ease-out shadow-xl"
                  : ""
              }`}
              onClick={() => setHoveredIndex(0)}
            >
              <p>
                <b>2025 Galois Honour Roll</b>
                <br></br>Group V (Score of 30/40)
              </p>
            </div>
            <div
              className={`bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer p-4 hover:bg-gray-100 ${
                hoveredIndex === 1
                  ? "ring-4 ring-blue-400 scale-[1.02] transition-all duration-200 ease-out shadow-xl"
                  : ""
              }`}
              onClick={() => setHoveredIndex(1)}
            >
              <p>
                <b>Ranked Nationally for Rubik's Cube</b>
                <br></br>16.51 One Handed Average (76th in Canada)
              </p>
            </div>
            <div
              className={`bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer p-4 hover:bg-gray-100 ${
                hoveredIndex === 2
                  ? "ring-4 ring-blue-400 scale-[1.02] transition-all duration-200 ease-out shadow-xl"
                  : ""
              }`}
              onClick={() => setHoveredIndex(2)}
            >
              <p>
                <b>Chess Enthusiast (2000+ Elo)</b>
                <br></br>
                Peak of 2300 in Bullet and 2200 in Blitz
              </p>
            </div>
            <div
              className={`bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer p-4 hover:bg-gray-100 ${
                hoveredIndex === 3
                  ? "ring-4 ring-blue-400 scale-[1.02] transition-all duration-200 ease-out shadow-xl"
                  : ""
              }`}
              onClick={() => setHoveredIndex(3)}
            >
              <p>
                <b>Musician (Piano + Cello + Trumpet)</b>
                <br></br>
                RCM Level 10 for Piano and Cello
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>{content[hoveredIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
