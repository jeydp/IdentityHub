import Button from "@/components/Button/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import React from "react";
import styles from "./FuturePart.module.scss";

const FuturePart = () => {
  return (
    <section className={styles.futurePart}>
      <div className="container">
        <SectionTitle
          bigStyle
          title={
            <>
              Be part of the future of <span>IdentityHub</span>
            </>
          }
          description="Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app."
        />
        <div className={styles.buttonWrap}>
          <Button href="#!" text="Start free trail" variant="bordered" />
        </div>
      </div>
    </section>
  );
};

export default FuturePart;
