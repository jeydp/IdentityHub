import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { HeaderNavigation } from "./utils/navigation";

const Header = () => {
  return (
    <header className="block p-5">
      <div className="max-w-[1203px] p-3 flex items-center justify-between mx-auto rounded-xl shadow-border shadow-white/10 bg-HeaderDark">
        <Link href={"./"} className="inline-flex items-center gap-2">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 2.66602H4.5V11.5549V20.4438H16.5V29.3327H28.5V20.4438V11.5549H16.5V2.66602Z"
              fill="url(#paint0_linear_0_83)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_83"
                x1="16.5"
                y1="2.66602"
                x2="16.5"
                y2="29.3327"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#B67EFD" />
                <stop offset="0.97" stop-color="#FFAC8E" />
                <stop offset="1" stop-color="#CAD1E9" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold font-sora">IdentityHub</span>
          {/* <Image
            alt="sitelogo"
            width={32}
            height={32}
            src={"./images/site-logo.svg"}
          /> */}
        </Link>

        <nav className="h-fit">
          <ul className="inline-flex items-center gap-6">
            {HeaderNavigation.map((e, i) => {
              return (
                <li key={i + 1}>
                  <Link href="#!" className="block hover:text-GradientBlue">
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <Button arrow href="./" text="Start free trial" variant="bordered" /> */}
        <Button arrow href="./" text="Start free trial" variant="filled" />
      </div>
    </header>
  );
};

export default Header;
