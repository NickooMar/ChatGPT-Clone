import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import { ChatGPT, Homepage } from "./pages";
import { logo } from "./assets";

function App() {
  return (
    <>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b[#e6ebf4]">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
        </div>
        <div className="gap-10 items-center flex flex-col md:flex-row mx-8">
          <Link
            to="/chat"
            className="font-medium bg-[#7D7C7A] text-white px-4 py-2 rounded-md hover:opacity-50"
          >
            <h1 style={{ fontFamily: "montserrat" }}>Chat GPT</h1>
          </Link>
          <Link
            to="https://openai.com/api/"
            className="font-inter font-medium px-4 py-2 rounded-md hover:opacity-60"
          >
            <h1 style={{ fontFamily: "montserrat" }}>API</h1>
          </Link>
          <Link
            to="https://openai.com/research/"
            className="font-inter font-medium px-4 py-2 rounded-md hover:opacity-60"
          >
            <h1 style={{ fontFamily: "montserrat" }}>RESEARCH</h1>
          </Link>
          <Link
            to="https://openai.com/about/"
            className="font-inter font-medium px-4 py-2 rounded-md hover:opacity-60"
          >
            <h1 style={{ fontFamily: "montserrat" }}>ABOUT</h1>
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chat" element={<ChatGPT />} />
      </Routes>
    </>
  );
}

export default App;
