import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TestimonialsCard from "./component/TestimonialsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { TestimonialsData } from "./utils/Testimonials";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <SectionTitle
          smallTitle="Testimonials"
          title={
            <>
              What&apos;s our user <span>says</span> about us
            </>
          }
        />
        <Slider className={styles.testimonialSlider} {...settings}>
          {TestimonialsData.map((e, i) => {
            return (
              <TestimonialsCard
                key={i + 1}
                date={e.date}
                testimonialsText={e.testimonialsText}
                userImage={e.userImage}
                userName={e.userName}
                userRole={e.userRole}
              />
            );
          })}
        </Slider>
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

export default Testimonials;
