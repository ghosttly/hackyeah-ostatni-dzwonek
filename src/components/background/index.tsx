"use client";

import Image from "next/image";
import React from "react";

export const Background = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full -z-50">
      <Image
        loader={(e) => e.src}
        fill
        alt="main background"
        src={`/images/main-background.png`}
        className="object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-main-blue-b opacity-40" />
    </div>
  );
};
