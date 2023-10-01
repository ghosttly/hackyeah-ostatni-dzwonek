import Image from "next/image";
import React from "react";

export const Portret = () => {
  return (
    <div className="absolute bottom-0 right-0 w-[593px] h-[593px] -z-50">
      <div className="h-[64px] w-[64px] absolute top-0 right-[70px]  rotate-[22.5deg]">
        <Image alt="hearth portret" src={"/images/portret_h.png"} fill />
      </div>
      <div className="h-[64px] w-[64px] absolute top-[120px] left-[70px] -rotate-[22.5deg]">
        <Image alt="hearth portret" src={"/images/portret_h.png"} fill />
      </div>
      <Image alt="bot portret" src={"/images/portret.png"} fill />
    </div>
  );
};
