import { languages } from "@/src/app/i18n/settings";
import Link from "next/link";

import React, { FC } from "react";
import { PL } from "../assets/flags/PL";
import { US } from "../assets/flags/US";

export const Navbar: FC<{ lng: string }> = ({ lng }) => {
  return (
    <div className="p-2 px-5 w-full absolute top-0 left-0 ">
      <div className="ml-auto w-max">
        {languages
          .filter((l) => lng !== l)
          .map((l) => {
            return (
              <span key={l}>
                <Link
                  className="flex text-[1.6rem] items-center justify-center gap-2 text-black font-semibold"
                  href={`/${l}`}
                >
                  {l === "en" ? (
                    <div className="w-6 h-6 flex">
                      <US />
                    </div>
                  ) : (
                    <div className="h-6 w-6 flex">
                      <PL />
                    </div>
                  )}
                  <span className="h-min">{l.toUpperCase()}</span>
                </Link>
              </span>
            );
          })}
      </div>
    </div>
  );
};
