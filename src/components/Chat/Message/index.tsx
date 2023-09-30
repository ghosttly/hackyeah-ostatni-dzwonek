import { FC } from "react";

import React from "react";
import { cn } from "@/utils";

export const Message: FC<{ msg: string; isUser: boolean }> = ({
  msg,
  isUser,
}) => {
  return (
    <div className={cn("w-full flex  items-center", isUser && "justify-end")}>
      <span
        className={cn(
          "p-3 bg-white px-[2.2rem] py-[1.4rem] my-2 rounded-[4rem] text-[1.6rem]",
          isUser && "bg-message-gradient"
        )}
      >
        {msg}
      </span>
    </div>
  );
};
