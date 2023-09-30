import React from "react";
import { NextPage } from "next";
import { Chat } from "@/components/Chat";
import { useTranslation } from "@/app/i18n";

const ChatPage = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, " chat");
  return (
    <div className="relative flex h-screen">
      <Chat />
    </div>
  );
};

export default ChatPage;