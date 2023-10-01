import React from "react";

import { Chat } from "@/src/components/Chat";

const ChatPage = async ({ params: { lng } }: { params: { lng: string } }) => {
  return (
    <div className="relative flex h-screen">
      <Chat />
    </div>
  );
};

export default ChatPage;
