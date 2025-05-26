import React from "react";
import InfiniteScroll from "./animations/InfiniteScroll";
import ap from "../assets/images/gallery/ap.png";
import roblox from "../assets/images/gallery/roblox.png";
import tower from "../assets/images/gallery/tower.png";

const Contact = () => {
  const items = [
    {
      content: (
        <div className="h-3/4 flex flex-col items-center justify-center">
          <img src={ap} className="h-full w-auto rounded-lg text-center" />
          <p className="mt-4">My First AP Exam Complete! (APCSA)</p>
        </div>
      ),
    },
    {
      content: (
        <div className="h-3/4 flex flex-col items-center justify-center">
          <img src={roblox} className="h-full w-auto rounded-lg text-center" />
          <p className="mt-4">Roblox Triple Trouble</p>
        </div>
      ),
    },
    {
      content: (
        <div className="h-3/4 flex flex-col items-center justify-center">
          <img src={tower} className="h-full w-auto rounded-lg text-center" />
          <p className="mt-4">
            Sometimes, the most infuriating games carry the best rewards.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-[50vh] flex items-center justify-center">
        <div className="bg-gray-100/30 backdrop-blur-md rounded-2xl w-1/2 h-5/6 mx-auto my-12">
          <p className="text-4xl font-semibold mb-8 mt-16 text-center">
            Got a project, question, or just want to connect?
          </p>
          <a
            href="mailto:piancello0806@gmail.com"
            className="inline-block bg-gray-200 px-10 py-5 text-xl rounded-lg hover:bg-gray-300 transition"
          >
            Send Email
          </a>
        </div>
      </div>
      {/* <p className="font-semibold text-4xl mb-4">GALLERY</p> */}
      {/* 👇 CircularGallery sticks to bottom now */}
      {/* <div className="w-full mb-12">
        <InfiniteScroll
          items={items}
          autoplay={true}
          autoplaySpeed={2}
          itemMinWidth={300}
        />
      </div> */}
    </div>
  );
};

export default Contact;
