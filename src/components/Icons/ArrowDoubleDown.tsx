import React from "react";

const ArrowDoubleDown = ({ className }: IconsProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <path
        d="M18 12.5C18 12.5 13.5811 18.5 12 18.5C10.4188 18.5 6 12.5 6 12.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 5.50005C18 5.50005 13.5811 11.5 12 11.5C10.4188 11.5 6 5.5 6 5.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowDoubleDown;
