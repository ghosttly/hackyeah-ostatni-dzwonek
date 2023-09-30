import React from "react";
import { NextPage } from "next";
import { Chat } from "@/components/Chat";

const ChatPage: NextPage = () => {
  return (
    <div className="relative flex h-screen">
      <Chat />
    </div>
  );
};

export default ChatPage;
