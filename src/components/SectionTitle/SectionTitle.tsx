import React from "react";

interface SectionTitleProps {
  isH1?: boolean;
}

const SectionTitle = ({ isH1 }: SectionTitleProps) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <span className="mb-2 inline-flex w-fit mx-auto group p-px bg-gradient-to-r from-GradientBlue to-GradientMagenta rounded-full">
        <span className="inline-flex px-4 py-1.5 leading-none rounded-full text-sm bg-HeaderDark shadow-inner shadow-white/20">
          Secure your data
        </span>
      </span>
      {isH1 ? (
        <h1>Identity-hub is a better way to achieve privacy</h1>
      ) : (
        <h2>Identity-hub is a better way to achieve privacy</h2>
      )}
      <p>
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
    </div>
  );
};

export default SectionTitle;
