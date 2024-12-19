import React from "react";
import styles from "./TestimonialsCard.module.scss";
import Image from "next/image";

const TestimonialsCard = () => {
  return (
    <section className={styles.testimonialsCard}>
      <div className={styles.testimonialsCardInner}>
        <div className={styles.userProfile}>
          <div className={styles.userimage}>
            <Image
              alt="user-profile"
              src={"/images/Pic.png"}
              width={44}
              height={44}
            />
          </div>
          <div className="">
            <p>David J. Karem</p>
            <span>
              Businessmen <span>1 day ago</span>
            </span>
          </div>
        </div>
        <div className={styles.testimonialsText}>
          <p>
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
            Stalkers and disgruntled acquaintances use the Internet to find
            addresses, phone numbers and other personal details about their
            targets. Identity thieves use personal information numbers and other
            personal details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCard;
