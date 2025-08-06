import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"What Our client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
    </section>
  );
};

export default Testimonials;
