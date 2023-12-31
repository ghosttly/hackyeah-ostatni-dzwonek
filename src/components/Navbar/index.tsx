"use client";

import { languages } from "@/src/app/i18n/settings";
import Link from "next/link";

import React, { FC } from "react";
import { PL } from "../assets/flags/PL";
import { US } from "../assets/flags/US";
import { usePathname } from "next/navigation";

export const Navbar: FC<{ lng: string }> = ({ lng }) => {
  const pathname = usePathname().slice(4);

  return (
    <div className="p-2 px-5 w-full absolute top-0 left-0 z-[100] ">
      {!pathname.includes("chat") ? (
        <div className="ml-auto w-max">
          {languages
            .filter((l) => lng !== l)
            .map((l) => {
              return (
                <span key={l}>
                  <Link
                    className="flex text-[2rem] items-center justify-center gap-2 text-black font-semibold"
                    href={`/${l}${pathname === "/" ? "" : "/" + pathname}`}
                  >
                    {l === "en" ? (
                      <div className="w-16 h-16 flex">
                        <US />
                      </div>
                    ) : (
                      <div className="h-16 w-16 flex">
                        <PL />
                      </div>
                    )}
                    <span className="h-min">{l.toUpperCase()}</span>
                  </Link>
                </span>
              );
            })}
        </div>
      ) : null}
    </div>
  );
};
