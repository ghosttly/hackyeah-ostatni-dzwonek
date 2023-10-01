"use client";

import React, { useEffect, useRef, useState } from "react";
import { Scene } from "./Scene";
import { useChat } from "ai/react";
import { Message } from "./Message";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Hearth } from "../assets/icons/Hearth";
import { useBackend } from "@/src/app/api/chat/useBackend";
import { Message as MessageType } from "ai";

const askAssistant = async (message: MessageType) => {
  const response = await fetch("/api/assistant", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data;
};

import Link from "next/link";
import { useStadiStore } from "@/src/store/useStadiAnimations";
export const Chat = () => {
  const { praiseTheconverstaion, getSuggestedTags, createDialogue } =
    useBackend();
  const { setConversationId, conversationId } = useStadiStore((state) => ({
    setConversationId: state.setConversationId,
    conversationId: state.conversationId,
  }));
  const [showBubble, setShowBubble] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await createDialogue();
      if (res) setConversationId(res);
      console.log(res);
    })();
  }, []);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: () => {
      handleMsgContainerScroll();
      setIsLoading(false);
    },
    onError: () => setIsLoading(false),
    onResponse: () => {
      handleMsgContainerScroll();
      setIsLoading(false);
    },
  });

  const handleMsgContainerScroll = () => {
    if (msgContainerRef.current)
      msgContainerRef?.current.scroll({
        top: msgContainerRef?.current.scrollHeight,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    if (showBubble) {
      if (conversationId) praiseTheconverstaion(conversationId);
      setTimeout(() => setShowBubble(false), 2000);
    }
  }, [showBubble]);

  const msgContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const language = pathname.slice(0, 3);

  return (
    <>
      <div className="absolute top-0 text-black left-0 z-10 h-screen w-full flex flex-col  lg:relative lg:w-3/4 p-[0.2rem] xl:w-1/2 ">
        <Link href={language}>
          <Image
            className="ml-[1.4rem] my-[1.4rem]"
            width={201}
            height={91}
            alt="ostatni dzwonek logo"
            src="/images/logo.png"
          />
        </Link>
        <div className="flex flex-col md:flex-row gap-[1.6rem] mx-[1.4rem] lg:mr-0 mb-[5rem]">
          <div className="bg-[#FFFFFF80]  w-full md:w-[300px] shrink-0 flex md:flex-col h-[10rem] md:h-full">
            <div className="md:h-[7.2rem] bg-main-blue-d flex items-center">
              <h3 className=" text-[3.2rem] px-[1.4rem] font-v323 ">
                {pathname.includes("/en") ? "HELPER" : "POMOCNIK"}
              </h3>
            </div>
            <div className="md:h-[calc(100vh-91px-6.4rem-5rem)]  custom-scrollbar overflow-x-scroll md:overflow-y-scroll md:overflow-x-auto flex md:flex-col gap-[1.4rem] p-[1.4rem]">
              {Array(100)
                .fill("Jakieś przykładowe pytania coś tam coś tam")
                .map((t, i) => (
                  <p
                    className="text-[1.6rem] bg-white text-center shrink-0 max-w-[400px] p-[0.4rem]"
                    key={i}
                  >
                    {t}
                  </p>
                ))}
            </div>
          </div>
          <div className="bg-[#FFFFFF80] grow">
            <div className="h-[7.2rem] bg-main-blue-d flex items-center pl-[1.4rem]">
              <Image
                src={"/images/stradi.png"}
                width={60}
                height={60}
                alt="stradi bot"
              />
              <h3 className=" text-[3.2rem] pl-[1.4rem] font-v323 ">Stadi</h3>
            </div>
            <div
              ref={msgContainerRef}
              className="h-[calc(100vh-91px-6.4rem-5rem-4.8rem-11.6rem)] md:h-[calc(100vh-91px-6.4rem-5rem-4.8rem)] overflow-y-scroll custom-scrollbar flex flex-col gap-[0.8rem] px-[2.4rem]"
            >
              {messages.map((message) => (
                <Message
                  key={message.id}
                  msg={message.content}
                  isUser={message.role === "user"}
                />
              ))}
            </div>
            <div className=" h-[5.8rem] p-[0.6rem] flex gap-[1.6rem] pr-[2rem]">
              <form
                onSubmit={async (e) => {
                  handleSubmit(e);
                  if (messages.length >= 2) {
                    const data = await askAssistant(
                      messages[messages.length - 1]
                    );
                    try {
                      const parsed = JSON.parse(data);
                      if ("statement" in parsed) {
                        console.log(parsed.statement);
                      }
                    } catch {}
                  }
                  handleMsgContainerScroll();
                  setIsLoading(true);
                }}
                className="h-full bg-white rounded-full p-[0.4rem] px-[1rem] flex grow "
              >
                <input
                  placeholder="Co chcesz wiedzieć? :)"
                  disabled={isLoading}
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  className="grow text-[1.6rem]"
                />
              </form>
              <Hearth
                showBubble={showBubble}
                onClick={() => setShowBubble((p) => !p)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full lg:w-1/4 xl:w-1/2 ">
        <Scene />
      </div>
    </>
  );
};
