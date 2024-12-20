import React from "react";
import styles from "./Services.module.scss";
import ServiceCard from "./component/ServiceCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { ServiceCardData } from "./utils/Services";

const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <div className="container">
        <SectionTitle
          description="Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel."
          smallTitle="Services"
          title={
            <>
              See our services for secure your <span>Data</span>
            </>
          }
        />
        <div className={styles.serviceCardWrap}>
          {ServiceCardData.map((e, i) => {
            return (
              <ServiceCard
                key={i + 1}
                icon={<e.icon />}
                LinkText={e.linkText}
                description={e.descrition}
                title={e.title}
              />
            );
          })}
        </div>
        <div className="square"></div>
      </div>
    </section>
  );
};

export default Services;
