import React from "react";

const Facebook = ({ className }: IconsProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <g clip-path="url(#clip0_0_761)">
        <path
          d="M7.10334 17.0363V10.072H4.71289V6.8577H7.10334V4.61305C7.10334 2.16793 8.65128 0.964844 10.8325 0.964844C11.8773 0.964844 12.7753 1.04263 13.037 1.0774V3.63269L11.5242 3.63338C10.3379 3.63338 10.07 4.19708 10.07 5.02426V6.8577H13.2843L12.2129 10.072H10.07V17.0363H7.10334Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_761">
          <rect
            width="17.1429"
            height="17.1429"
            fill="white"
            transform="translate(0.427734 0.427734)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;
