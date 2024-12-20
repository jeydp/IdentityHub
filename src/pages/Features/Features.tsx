import React from "react";
import styles from "./Features.module.scss";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import FeaturesCard from "./component/FeaturesCard";
import Image from "next/image";
import ArrowDoubleDown from "@/components/Icons/ArrowDoubleDown";
import CheckIcon from "@/components/Icons/CheckIcon";
import { FeaturesData } from "./utils/Features";

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
                icon={<e.icon />}
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
