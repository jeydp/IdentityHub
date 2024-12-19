import React from "react";
import styles from "./Services.module.scss";
import ServiceCard from "./component/ServiceCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ServiceIcon1 from "@/components/Icons/ServiceIcon1";
import ServiceIcon3 from "@/components/Icons/ServiceIcon3";
import ServiceIcon2 from "@/components/Icons/ServiceIcon2";

const ServiceCardData = [
  {
    id: 1,
    icon: <ServiceIcon1 />,
    title: "Personal Information removal",
    descrition:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    linkText: "Explore More",
  },
  {
    id: 2,
    icon: <ServiceIcon2 />,
    title: "Cloaking Alias Profiles",
    descrition:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    linkText: "Explore More",
  },
  {
    id: 3,
    icon: <ServiceIcon3 />,
    title: "Virtual identities Security",
    descrition:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    linkText: "Explore More",
  },
];

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
                icon={e.icon}
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
