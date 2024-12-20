import React from "react";
import styles from "./ServiceCard.module.scss";
import Link from "next/link";
import LinkTriangle from "@/components/Icons/LinkTriangle";

interface ServiceCardProps {
  title?: string;
  description?: string;
  LinkText?: string;
  icon?: React.ReactElement;
}

const ServiceCard = ({
  title,
  description,
  LinkText,
  icon,
}: ServiceCardProps) => {
  return (
    <>
      <div className={styles.serviceCard}>
        <div className={styles.icon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={"#!"}>
          {LinkText} <LinkTriangle />
        </Link>
        <svg className={styles.flt_svg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default ServiceCard;
