import React from "react";
import styles from "./TestimonialsCard.module.scss";
import Image from "next/image";

interface TestimonialsCardProps {
  userImage?: string;
  userName?: string;
  userRole?: string;
  date?: string;
  testimonialsText?: string;
}

const TestimonialsCard = ({
  userImage,
  userName,
  userRole,
  date,
  testimonialsText,
}: TestimonialsCardProps) => {
  return (
    <div className={styles.testimonialsCard}>
      <div className={styles.testimonialsCardInner}>
        <div className={styles.userProfile}>
          <div className={styles.userimage}>
            <Image
              alt="user-profile"
              src={`/${userImage}`}
              width={44}
              height={44}
            />
          </div>
          <div className="">
            <p>{userName}</p>
            <span>
              {userRole} <span>{date}</span>
            </span>
          </div>
        </div>
        <div className={styles.testimonialsText}>
          <p>{testimonialsText}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
