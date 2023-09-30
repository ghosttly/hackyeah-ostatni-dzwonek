"use client";

import React from "react";
import { Scene } from "./Scene";
import { useChat } from "ai/react";
export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages);

  return (
    <>
      <div className="absolute top-0 text-black left-0 z-10 w-full h-full lg:relative lg:w-1/2 p-1 bg-slate-50 ">
        <div className="h-full  border-solid p-4 rounded-lg border-2 flex flex-col">
          <div className=" p-2 grow w-full border-solid border-2 rounded-lg">
            {messages.map((message) => (
              <div key={message.id} className="transition-all">
                {message.role === "user" ? "User: " : "AI: "}
                {message.content}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 p-2  border-solid border-2 rounded-lg"
          >
            <input value={input} onChange={handleInputChange} />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="h-full w-full lg:w-1/2 ">
        <Scene />
      </div>
    </>
  );
};
