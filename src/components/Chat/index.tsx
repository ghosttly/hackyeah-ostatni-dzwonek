"use client";

import React, { useEffect, useRef, useState } from "react";
import { Scene } from "./Scene";
import { useChat } from "ai/react";
import { Message } from "./Message";
import Link from "next/link";
import { useStadiStore } from "@/src/store/useStadiAnimations";
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

export const Chat = () => {
  const {
    praiseTheConverstaion,
    getSuggestedUnis,
    createDialogue,
    triggerFintTunning,
  } = useBackend();
  const { setConversationId, conversationId, setConversationAnimation } =
    useStadiStore((state) => ({
      setConversationId: state.setConversationId,
      conversationId: state.conversationId,
      setConversationAnimation: state.setConversationAnimation,
    }));
  const [showBubble, setShowBubble] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedUnis, setSuggestedUnis] = useState<
    { name?: string }[] | undefined
  >([]);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: async (d) => {
      handleMsgContainerScroll();
      setIsLoading(false);
      if (!conversationId) return;
      const sugesteddUnis = await getSuggestedUnis(conversationId);
      if (!!sugesteddUnis) setSuggestedUnis(sugesteddUnis);
      const res = await createDialogue(
        messages[messages.length - 1].content,
        d.content,
        conversationId
      );
      if (res) setConversationId(res);
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
      if (conversationId) {
        praiseTheConverstaion(conversationId);
        setShowBubble(false);
        return;
      }
      setTimeout(() => setShowBubble(false), 2000);
    }
  }, [showBubble, conversationId]);

  const msgContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const pathname = usePathname();
  const language = pathname.slice(0, 3);

  return (
    <>
      <div className="absolute top-0 text-black left-0 z-10 h-screen w-full flex flex-col  lg:relative lg:w-3/4 p-[0.2rem] xl:w-1/2 ">
        <Link
          href={language}
          className="flex items-center ml-[1.4rem] my-[1.4rem] gap-[2rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            width="40"
            height="40"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 298 511.93"
          >
            <path
              fill-rule="nonzero"
              d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"
            />
          </svg>
          <Image
            className=""
            width={201}
            height={91}
            alt="ostatni dzwonek logo"
            src={
              language.includes("en")
                ? "/images/logo_eng.png"
                : "/images/logo.png"
            }
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
              {!!suggestedUnis?.length ? (
                suggestedUnis.map(({ name }) => (
                  <p
                    className="text-[1.6rem] bg-white text-center shrink-0 max-w-[400px] p-[0.4rem] select-none cursor-pointer"
                    key={name}
                  >
                    &#127979; {name}
                  </p>
                ))
              ) : language.includes("pl") ? (
                <p className="text-[1.6rem] bg-white text-center shrink-0 max-w-[400px] p-[0.4rem] tracking-tighter select-none ">
                  &#127979; Brak <br />
                  sugerowanych uczelni :(
                </p>
              ) : (
                <p className="text-[1.6rem] bg-white text-center shrink-0 max-w-[400px] p-[0.4rem] tracking-tighter select-none">
                  &#127979; There are <br /> no sugestted universities yet :(
                </p>
              )}
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
                  e.preventDefault();
                  handleSubmit(e);
                  if (messages.length >= 2) {
                    const data = await askAssistant(
                      messages[messages.length - 1]
                    );
                    try {
                      const parsed = JSON.parse(data);
                      console.log(parsed);
                      if (
                        "statement" in parsed ||
                        ("data" in parsed && "statement" in parsed.data)
                      ) {
                        setConversationAnimation(
                          parsed.statement ?? parsed.data.statement
                        );
                      }
                    } catch {}
                  }
                  handleMsgContainerScroll();
                  setIsLoading(true);
                  triggerFintTunning();
                }}
                className="h-full bg-white rounded-full p-[0.4rem] px-[1rem] flex grow "
              >
                <input
                  placeholder={
                    language.includes("en")
                      ? "What you want to know ? :)"
                      : "Co chcesz wiedzieć? :)"
                  }
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
