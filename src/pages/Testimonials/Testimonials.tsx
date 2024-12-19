import React from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TestimonialsCard from "./component/TestimonialsCard";

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
        <TestimonialsCard />
        <Slider className="max-w-full" {...settings}>
          <div>
            <TestimonialsCard />
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
