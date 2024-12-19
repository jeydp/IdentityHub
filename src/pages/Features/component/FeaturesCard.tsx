import React from "react";
import styles from "./FeaturesCard.module.scss";
import Image from "next/image";

interface FeaturesCardProps {
  id?: number;
  title?: string;
  list?: string[] | React.ReactNode;
  imagePath?: string;
  icon?: React.ReactNode;
}

const FeaturesCard = ({ title, list, imagePath, icon }: FeaturesCardProps) => {
  return (
    <div className={styles.FeaturesCard}>
      <div className={styles.FeaturesCardInner}>
        <div className={styles.FeaturesCardContent}>
          <div className={styles.FeaturesCardIcon}>{icon}</div>
          <h3>{title}</h3>
          <ul>{list}</ul>
        </div>
        <div className={styles.FeaturesCardImage}>
          <Image
            src={`${imagePath}`}
            width={484}
            height={355}
            alt={`${title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
