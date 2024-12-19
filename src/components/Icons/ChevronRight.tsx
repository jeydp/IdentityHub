import React from "react";

const ChevronRight = ({ className }: IconsProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <path
        d="M6.50003 4C6.50003 4 10.5 6.94593 10.5 8C10.5 9.05413 6.5 12 6.5 12"
        stroke="currentColor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronRight;
