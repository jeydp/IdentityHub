import React from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  isH1?: boolean;
  smallTitle?: string;
  title?: string | React.ReactElement;
  description?: string;
}

const SectionTitle = ({
  isH1,
  smallTitle,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      {smallTitle && (
        <span className={styles.smallTitle}>
          <span>{smallTitle}</span>
        </span>
      )}
      {isH1 ? (
        <h1 className={styles.Heading}>{title}</h1>
      ) : (
        <h2 className={styles.Heading2}>{title}</h2>
      )}
      {description && <p className={styles.Desc}>{description}</p>}
    </div>
  );
};

export default SectionTitle;
