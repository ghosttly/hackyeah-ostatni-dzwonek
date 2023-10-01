import Image from "next/image";
import React from "react";

export const Bell = () => {
  return (
    <div className="w-[2.4rem] h-[2.4rem] relative">
      <Image src={"/images/bell.png"} fill alt="bell logo" />
    </div>
  );
};
