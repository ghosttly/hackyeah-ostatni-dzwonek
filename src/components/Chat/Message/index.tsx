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
          "p-3 bg-white px-5 py-[14px] my-2 rounded-full",
          isUser && "bg-message-gradient"
        )}
      >
        {msg}
      </span>
    </div>
  );
};
