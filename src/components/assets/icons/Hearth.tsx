import { cn } from "@/utils";
import React, { FC } from "react";

export const Hearth: FC<{ onClick: () => void; showBubble: boolean }> = ({
  onClick,
  showBubble,
}) => {
  return (
    <div className="relative" onClick={onClick}>
      <div
        className={cn(
          "absolute p-[0.4rem] w-max right-[10px] lg:-right-[370%] bottom-[calc(100%+15px)] bg-[#FFFFFF80] hidden text-[1.6rem] ",
          showBubble && "block"
        )}
      >
        Daj serduszko <br />
        jeżeli byłem dla Ciebie pomocny :)
        <span className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-[#FFFFFF80] border-l-[transparent] border-r-[transparent]    -z-50 absolute right-[20px] lg:right-[calc(100%-40px)] top-full " />
      </div>
      <svg
        className="cursor-pointer"
        width="40"
        height="48"
        viewBox="0 0 56 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="56" height="48" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_53_18683"
              transform="matrix(0.010453 0 0 0.0121951 -0.00174216 0)"
            />
          </pattern>
          <image
            id="image0_53_18683"
            width="96"
            height="82"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABSCAYAAACrKtGeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPXSURBVHgB7Z0xT9tAFMcfISQQFZERpjpSOzfsoDojGx3oStMPAB1YylLaoWtVPgDJTJcyoU5p1Ymp+QBImAnEBCIIEgLuvVCGqr5zZJ95Tvr/SSdZOdtx/HNyz893F6LouKr4CZQDSo4DokSO2aWIZCkGs6OjtDkxQbY49n1aurigJNkuFGgmkyFbrFxe0q+bG4qKvSMBkYAAYSBAGAgQBgKECYuCXqnyXFNXpGTg/dYM9e9V8TR1ZVVWybzvJHinyrKm7ocqdd2GI2SmvpDNLnO4GcSjkRGaz8aKZP+ipcLQn92utn6r0+FQtaIWv2tWcZ9mMo2lsTHtPvh4+bht0VQh6NHtbWAdh6e73W5dLVZ124eePT75C4YPZBM+Mab3Uh+GjkNi7rB92Kaszk9Zc4Eyu4YLikEbIAwECAMBwthrQYeYfnI9qvGP1LizANdQ/5jSR9lQ94wswwlCTri5rqtdp9ls0od2mzTRIoe+2o1ZQGPW0IpPZ9LzK/Xk7lg+9bGOVRzHoUajoa2vVFRkvLf3z+v8jVDndlEtLgZtx9+s3k+QzZRykqzk8zRI8D2H6T5pvtVCIywNBAgDAcJAgDC4D7DE+tUVTWrq5lRDrAsgIKAPPM+jUqmkra/Var1QNYidnR36tram3RYCQphWsTz3pKCTk8B6vvIZnYCpqSkyAQF9YOrGMhnz2QIaYWEgQBgIEAYChIEAYSBAGAgQBgKEgQBhIEAYCBAGuSALHB4e9jKmQZydnRm3hYCYcLb0bbVqXGfO8GAeAmKyPj5OcUAbIAwECAMBwkCAMBAgDAQIAwHCQIAwECAMBAgDAcL0ckGmQWicbJpJ0TClQeLc92lfM4r+Hu5X1zDUO+v5vPOQI8+Hid3ra/rYbp+qxaZuHf4GVAz7qKviEIjDVzLMFYHfFmEgQBgIEAYChIEAYUKfCW92OlRTJQieqCjuM9FBh4co7Wvuo84pnDABb1q+v9EKrnOnfb9G/zk8zdqR778gfax/ato+TMAp6XfgEbiHz5FHEUAbIAwECAMBwkCAMLG6JvKEpVuaEJV5qbKoNidJlYCjnG2V1dRxFJJuDiPO2XHobmpjHavbhUJx0J8l/PlTCY5yPhtWq1PEKCjJy/NACXCGRICnFkuUAGgDhIEAYSBAGAgQJtERMtyAkSZM4/B0MiUhKvde4HAziGPN67ZIUoDHU/5qKFZzueLrXI7SwBcV56uUu0jiMUkBpt4WG3T3tx9pguP8DXpg0AYIAwHCQIAwECAMBAgjNlKeO642Y/wNrE3ippTjIHUn5FD6Ov16JNDR4Dcc6BkzXpEvkgAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  );
};
