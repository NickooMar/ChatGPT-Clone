import React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { image_banner_openai, video_banner } from "../assets";

const Homepage = () => {
  return (
    <div className="relative flex flex-col justify-center">
      <div className="flex z-0">
        <video
          autoPlay
          loop
          muted
          poster={image_banner_openai}
          className="aspect-video min-w-full"
        >
          <source src={video_banner} type="video/mp4" />
          <source src={video_banner} type="video/ogg" />
        </video>
        <div className="absolute w-full bg-black z-10 min-h-full opacity-30" />
      </div>
      <div className="absolute hidden md:block ml-24 z-20">
        <h1
          className="text-white"
          style={{ fontSize: 36, fontFamily: "montserrat" }}
        >
          Join us in shaping the future <br /> of technology.
        </h1>
        <div className="mt-4">
          <button
            style={{ fontFamily: "montserrat" }}
            className="text-black bg-white font-bold rounded-full p-2 px-3 text-sm mr-10"
          >
            <PlayArrowIcon /> WATCH VIDEO
          </button>
          <button className="text-white">
            <h1 style={{ fontFamily: "montserrat" }}>VIEW CARRERS </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
