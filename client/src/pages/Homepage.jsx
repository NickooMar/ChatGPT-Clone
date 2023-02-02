import React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { image_banner_openai, video_banner, logo_white } from "../assets";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="relative">
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
        <div className="absolute hidden md:block ml-24 xl:ml-64 z-20 md:text-lg">
          <h1
            className="text-white text-4xl"
            style={{ fontFamily: "montserrat" }}
          >
            Join us in shaping the future <br /> of technology.
          </h1>
          <div className="mt-4">
            <Link
              to="https://player.vimeo.com/video/777147453?h=d4f76f0bd7"
              target="_blank"
            >
              <button
                style={{ fontFamily: "montserrat" }}
                className="text-black bg-white font-bold rounded-full p-2 px-3 text-sm mr-10"
              >
                <PlayArrowIcon /> WATCH VIDEO
              </button>
            </Link>
            <Link to="https://openai.com/careers">
              <button className="text-white">
                <h1 style={{ fontFamily: "montserrat" }}>VIEW CARRERS </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[600px]  bg-black ">
        <div className="flex flex-col items-start pl-24 xl:pl-56 pt-20">
          <Link to="/">
            <img src={logo_white} alt="logo" className="w-44 object-contain" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center mt-8">
          <div className="text-white ">
            <h1 className="font-bold mb-2" style={{ fontFamily: "montserrat" }}>
              Featured
            </h1>
            <Link to="/chat" className="hover:opacity-50">
              <p>ChatGPT</p>
            </Link>
            <Link
              to="https://openai.com/dall-e-2/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>DALL·E</p>
            </Link>
            <Link
              to="https://openai.com/blog/whisper/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Whisper</p>
            </Link>
            <Link
              to="https://openai.com/alignment/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Alignment</p>
            </Link>
            <Link
              to="https://openai.fund/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Startup Fund</p>
            </Link>
          </div>
          <div className="text-white">
            <h1 className="font-bold mb-2" style={{ fontFamily: "montserrat" }}>
              API
            </h1>
            <Link to="https://openai.com/api/" className="hover:opacity-50">
              <p>Overview</p>
            </Link>
            <Link
              to="https://openai.com/api/pricing/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Pricing</p>
            </Link>
            <Link
              to="https://platform.openai.com/examples/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Examples</p>
            </Link>
            <Link
              to="https://platform.openai.com/docs/introduction"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Docs</p>
            </Link>
            <Link
              to="https://status.openai.com/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Status</p>
            </Link>
          </div>
          <div className="text-white">
            <h1 className="font-bold" style={{ fontFamily: "montserrat" }}>
              Blog
            </h1>
            <Link to="https://openai.com/blog/" className="hover:opacity-50">
              <p>Index</p>
            </Link>
            <Link
              to="https://openai.com/blog/tags/research/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Research</p>
            </Link>
            <Link
              to="https://openai.com/blog/tags/announcements/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Announcements</p>
            </Link>
            <Link
              to="https://openai.com/blog/tags/events/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Events</p>
            </Link>
            <Link
              to="https://openai.com/blog/tags/milestones/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Milestones</p>
            </Link>
          </div>
          <div className="text-white">
            <h1 className="font-bold" style={{ fontFamily: "montserrat" }}>
              Information
            </h1>
            <Link to="https://openai.com/about/" className="hover:opacity-50">
              <p>About Us</p>
            </Link>
            <Link
              to="https://openai.com/charter/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Our Charter</p>
            </Link>
            <Link
              to="https://openai.com/research/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Our Researchs</p>
            </Link>
            <Link
              to="https://openai.com/publications/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Publications</p>
            </Link>
            <Link
              to="https://openai.com/newsroom/"
              target="_blank"
              className="hover:opacity-50"
            >
              <p>Newsroom</p>
            </Link>
          </div>
        </div>
        <div className="absolute block bottom-5 left-[13.5%]">
          <h1 className="text-white" style={{ fontFamily: "montserrat" }}>
            OpenAI © 2015-2023 Privacy Policy Terms of Use
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
