import React from "react";
import styles from "./Features.module.scss";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import FeaturesCard from "./component/FeaturesCard";
import Image from "next/image";
import ArrowDoubleDown from "@/components/Icons/ArrowDoubleDown";
import CheckIcon from "@/components/Icons/CheckIcon";

const FeaturesData = [
  {
    id: 1,
    title: "Protect Personal Information",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialize in personal information removal.",
    ],
    imagePath: "/images/feature-1.png",
    icon: <ArrowDoubleDown />,
  },
  {
    id: 2,
    title: "Detailed Reporting",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialize in personal information removal.",
    ],
    imagePath: "/images/feature-2.png",
    icon: <ArrowDoubleDown />,
  },
  {
    id: 3,
    title: "Secure All Data",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform.",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialize in personal information removal.",
    ],
    imagePath: "/images/feature-3.png",
    icon: <CheckIcon />,
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <SectionTitle
          description="We are the only service that provides all 3 services as a packaged service"
          smallTitle="Features"
          title={
            <>
              Why <span>choose</span> us
            </>
          }
        />
        <div className={styles.FeaturesCardWrap}>
          {FeaturesData.map((e) => {
            return (
              <FeaturesCard
                imagePath={e.imagePath}
                list={e.list.map((i) => {
                  return <li>{i}</li>;
                })}
                title={e.title}
                icon={e.icon}
              />
            );
          })}
        </div>
      </div>
      <Image
        className={styles.gradientBlur}
        alt="sitelogo"
        width={1417}
        height={1383}
        src={"/images/banner-gradient-blur.png"}
      />
    </section>
  );
};

export default Features;
