import React from "react";
import styles from "./HeroBannerChips.module.scss";

interface HeroBannerChipsProps {
  icon?: React.ReactElement;
  title?: string;
  description?: string;
}

const HeroBannerChips = ({
  icon,
  title,
  description,
}: HeroBannerChipsProps) => {
  return (
    <div className={styles.HeroBannerChips}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default HeroBannerChips;
