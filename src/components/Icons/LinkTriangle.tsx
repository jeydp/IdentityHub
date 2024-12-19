import React from "react";

const LinkTriangle = ({ className }: IconsProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <path
        opacity="0.5"
        d="M9.56132 6.30888C9.94342 5.79006 10.6737 5.67924 11.1926 6.06135C11.5955 6.35813 11.9786 6.65499 12.3123 6.91536C12.9782 7.43512 13.8702 8.15067 14.7655 8.92808C15.6551 9.70046 16.5748 10.5568 17.2812 11.3563C17.6332 11.7547 17.9569 12.1665 18.199 12.5681C18.4217 12.9376 18.6673 13.4453 18.6673 14.0008C18.6673 14.5562 18.4217 15.0641 18.199 15.4336C17.9569 15.8351 17.6332 16.2468 17.2812 16.6453C16.5748 17.4448 15.6551 18.3011 14.7655 19.0736C13.8702 19.8509 12.9782 20.5664 12.3123 21.0863C11.9786 21.3466 11.5955 21.6435 11.1926 21.9403C10.6738 22.3224 9.94342 22.2115 9.56132 21.6927C9.40772 21.4841 9.33379 21.2415 9.334 21.0009L9.33398 14.0008V7.00073C9.33379 6.76017 9.40772 6.51743 9.56132 6.30888Z"
        fill="white"
      />
      <path
        d="M17.2812 11.3563C17.6332 11.7547 17.9569 12.1665 18.199 12.5681C18.4217 12.9376 18.6673 13.4453 18.6673 14.0008C18.6673 14.5562 18.4217 15.0641 18.199 15.4336C17.9569 15.8351 17.6332 16.2468 17.2812 16.6452C16.5748 17.4448 15.6551 18.3011 14.7655 19.0735C13.8702 19.8509 12.9782 20.5664 12.3123 21.0863C11.9786 21.3466 11.5955 21.6435 11.1926 21.9403C10.6737 22.3224 9.94342 22.2115 9.56132 21.6927C9.40772 21.4841 9.33379 21.2414 9.334 21.0009L9.33398 15.1673L15.2267 9.33398C15.9657 9.9938 16.6965 10.6946 17.2812 11.3563Z"
        fill="white"
      />
    </svg>
  );
};

export default LinkTriangle;
