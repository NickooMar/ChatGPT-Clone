import React, { useState, useEffect } from "react";

import SendIcon from "@mui/icons-material/Send";
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
          <h1
            className="text-4xl text-center font-bold"
            style={{ fontFamily: "montserrat" }}
          >
            ChatGPT
          </h1>
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
