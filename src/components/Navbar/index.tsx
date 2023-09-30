import { languages } from "@/app/i18n/settings";
import Link from "next/link";

import React, { FC } from "react";
import { PL } from "../assets/flags/PL";
import { US } from "../assets/flags/US";

export const Navbar: FC<{ lng: string }> = ({ lng }) => {
  return (
    <div className="p-2 px-5 w-full ">
      <div className="ml-auto w-max">
        {languages
          .filter((l) => lng !== l)
          .map((l) => {
            return (
              <span key={l}>
                <Link
                  className="flex items-center justify-center gap-2"
                  href={`/${l}`}
                >
                  {l === "en" ? (
                    <div className="w-5 h-5 flex">
                      <US />
                    </div>
                  ) : (
                    <div className="h-5 w-5 flex">
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
