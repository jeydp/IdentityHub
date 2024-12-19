import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "filled" | "bordered";
  arrow?: boolean;
}

const BorderedStyle =
  "p-px bg-gradient-to-r from-GradientBlue/70 to-GradientMagenta/70 rounded-xl text-BodyText text-white";
const FilledStyle =
  "group p-px bg-gradient-to-r from-GradientBlue to-GradientMagenta rounded-xl";

const Button = ({ href, text, variant, arrow }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={` ${variant === "bordered" ? BorderedStyle : ""} ${
        variant === "filled" ? FilledStyle : ""
      }`}
    >
      <span
        className={` ${
          variant === "bordered"
            ? "group-hover:shadow-2xl group-hover:shadow-white/20"
            : " group-hover:bg-transparent bg-HeaderDark/80 backdrop-blur-sm shadow-inner shadow-white/20  "
        } transition-all duration-300 rounded-xl inline-flex items-center gap-1 py-[11px] px-5 leading-none`}
      >
        {text}
        {arrow && (
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:translate-x-2 transition-all duration-300"
          >
            <path
              d="M6.50003 4C6.50003 4 10.5 6.94593 10.5 8C10.5 9.05413 6.5 12 6.5 12"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </span>
    </Link>
  );
};

export default Button;
