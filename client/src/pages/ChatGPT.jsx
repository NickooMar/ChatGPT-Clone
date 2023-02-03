import React, { useState, useEffect } from "react";

import SendIcon from "@mui/icons-material/Send";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import { chat_userAI_logo, default_user_logo } from "../assets";

const ChatGPT = () => {
  const [prompt, setPrompt] = useState(null);
  const [promptArray, setPromptArray] = useState([]);
  const [responseArray, setResponseArray] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handlePromptRequest = async (e) => {
    e.preventDefault();

    if (prompt.length === 0)
      return alert("Please fill the field and try again.");

    try {
      setIsLoading(true);
      setPrompt("");
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const AIresponse = await response?.json();

      setResponseArray([...responseArray, AIresponse]);
      setPromptArray([...promptArray, prompt]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(responseArray);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className="w-full h-screen bg-[#E5E4E2] flex flex-col justify-center items-center relative">
      <div className=" h-full w-7/12 mt-4  overflow-x-hidden overflow-y-auto">
        {responseArray.length === 0 ? (
          <div className="w-full h-full">
            <h1
              className="text-4xl text-center font-bold"
              style={{ fontFamily: "montserrat" }}
            >
              ChatGPT
            </h1>
            <div className="hidden lg:grid lg:grid-flow-col lg:auto-cols-auto lg:place-items-center gap-4 mt-4">
              <div className="flex flex-col items-center">
                <WbSunnyIcon className="w-12 h-12" />
                <h1
                  style={{ fontFamily: "montserrat" }}
                  className="text-lg font-semibold"
                >
                  Examples
                </h1>

                <div className="grid grid-rows-3">
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <button
                      onClick={() =>
                        setPrompt("Explain quantum computing in simple terms")
                      }
                    >
                      <h1>"Explain quantum computing in simple terms" → </h1>
                    </button>
                  </div>
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <button
                      onClick={() =>
                        setPrompt(
                          "Got any creative ideas for a 10 year old's birthday?"
                        )
                      }
                    >
                      <h1>
                        "Got any creative ideas for a 10 year old's birthday?" →{" "}
                      </h1>
                    </button>
                  </div>
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <button
                      onClick={() =>
                        setPrompt("How do i make an HTTP request in javascript")
                      }
                    >
                      <h1>"How do i make an HTTP request in javascript" → </h1>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <FlashOnIcon className="w-12 h-12" />
                <h1
                  style={{ fontFamily: "montserrat" }}
                  className="text-lg font-semibold"
                >
                  Capabilities
                </h1>

                <div className="grid grid-rows-3">
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <h1>
                      "Remembers what user said earlier in the conversation"
                    </h1>
                  </div>
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <h1>"Allows user to provide follow-up corrections"</h1>
                  </div>
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <h1>"Trained to decline inappropriate requests"</h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <ReportProblemIcon className="w-12 h-12" />
                <h1
                  style={{ fontFamily: "montserrat" }}
                  className="text-lg font-semibold"
                >
                  Limitations
                </h1>

                <div className="grid grid-rows-3">
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <h1>"May occasionally generate incorrect information"</h1>
                  </div>
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <h1>"May occasionaly produce harmful instructions"</h1>
                  </div>
                  <div className="bg-slate-600 w-full rounded-md p-3 text-white mt-2">
                    <h1>"Limited knowledge of world and events after 2021"</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : isLoading ? (
          <div className="h-full flex justify-center items-center">
            <h1 className="text-3xl animate-ping">...</h1>
          </div>
        ) : (
          responseArray.map((answer, i) => (
            <>
              <div className="flex items-center mb-6 ">
                <img
                  src={default_user_logo}
                  alt="chatAI-logo"
                  className="w-12 h-12 mr-4 ml-4"
                  style={{ borderRadius: 100 }}
                />
                <h1 style={{ fontFamily: "montserrat" }}>{promptArray[i]}</h1>
              </div>
              <div className="flex items-center mb-6 bg-gray-200 border-b-gray-300 border-b-2 rounded-lg">
                <img
                  src={chat_userAI_logo}
                  alt="chatAI-logo"
                  className="w-12 h-12 mr-4 ml-4 rounded-lg"
                />
                <h1 style={{ fontFamily: "montserrat" }}>{answer}</h1>
              </div>
            </>
          ))
        )}
      </div>

      <div className="mt-10 w-full flex flex-col items-center justify-center">
        <form
          onSubmit={handlePromptRequest}
          className="flex w-5/6 relative items-center md:w-1/2 md:h-14"
        >
          <input
            type="text"
            name="prompInput"
            id="prompInput"
            className="w-full bg-[#525B68] rounded-lg shadow-2xl relative text-lg"
            style={{ color: "white", padding: 25 }}
            placeholder="Type something..."
            value={prompt}
            onChange={handleChange}
            autoFocus
            autoComplete="off"
          ></input>
          <button type="submit" className="absolute right-5">
            <SendIcon style={{ color: "white" }} />
          </button>
        </form>
        <p style={{ color: "#36454F" }} className="mt-12 mx-12">
          Free Research Preview: ChatGPT is optimized for dialogue. Our goal is
          to make AI systems more natural to interact with, and your feedback
          will help us improve our systems and make them safer.
        </p>
      </div>
    </div>
  );
};

export default ChatGPT;
