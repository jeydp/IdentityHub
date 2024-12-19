import CheckShield from "@/components/Icons/CheckShield";
import CreditCard from "@/components/Icons/CreditCard";
import EmailOpen from "@/components/Icons/EmailOpen";
import Phone from "@/components/Icons/Phone";
import React from "react";
import styles from "./HeroBanner.module.scss";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Button from "@/components/Button/Button";
import HeroBannerChips from "./component/HeroBannerChips";
import Image from "next/image";

const HeroBannerChipsData = [
  {
    id: 1,
    icon: <CheckShield />,
    title: "One-time passcode",
    description: "Kas3345-r32",
  },
  {
    id: 2,
    icon: <Phone />,
    title: "Phone numbers",
    description: "+1 (456) 453-3456",
  },
  {
    id: 1,
    icon: <CreditCard />,
    title: "Credit card",
    description: "123 456 789 1243",
  },
  {
    id: 1,
    icon: <EmailOpen />,
    title: "Email address",
    description: "davidjx@gmail.com",
  },
];

const HeroBanner = () => {
  return (
    <section className={styles.HeroBanner}>
      <div className={styles.HeroBannerContainer}>
        <SectionTitle
          smallTitle="Secure your data"
          title={
            <>
              Identity-hub is a better way to achieve <span>privacy</span>
            </>
          }
          description="Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel."
          isH1
        />
        <div className={styles.buttonGroup}>
          <Button href="#!" variant="filled" text="Use it Now" />
          <Button href="#!" variant="bordered" text="Start free trial" />
        </div>
        <div className={styles.HeroBannerImage}>
          <ul>
            {HeroBannerChipsData.map((e, i) => {
              return (
                <li key={i + 1}>
                  <HeroBannerChips
                    icon={e.icon}
                    title={e.title}
                    description={e.description}
                  />
                </li>
              );
            })}
          </ul>
          <Image
            alt="sitelogo"
            width={390.65}
            height={411.77}
            src={"/images/hero-center-img.png"}
          />
        </div>
      </div>
      <Image
        className={styles.galaxyImg}
        alt="sitelogo"
        width={1261}
        height={1248}
        src={"/images/banner-galaxy.png"}
      />
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

export default HeroBanner;
