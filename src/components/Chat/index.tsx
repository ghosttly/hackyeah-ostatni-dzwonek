"use client";

import React from "react";
import { Scene } from "./Scene";
import { useChat } from "ai/react";
import { Message } from "./Message";
export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className="absolute top-0 text-black left-0 z-10 w-full h-full lg:relative lg:w-1/2 p-1  ">
        <div className="h-full p-10 rounded-lg  flex flex-col">
          <div className=" p-2 grow w-full overflow-y-auto border-solid border-2 scrollbar scrollbar-track-transparent scrollbar-thumb-main-blue-b scrollbar-rounded-md border-main-blue-b rounded-lg bg-[#FFFFFF80] ">
            {messages.map((message) => (
              <Message
                key={message.id}
                msg={message.content}
                isUser={message.role === "user"}
              />
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 p-2  border-solid border-2 rounded-lg bg-slate-50"
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
