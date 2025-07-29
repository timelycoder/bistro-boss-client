import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading="From 11:00am to 10:00pm"
        heading="order online"
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-16"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-black uppercase text-center -mt-20 text-4xl pr-32 pb-16 ">
            salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-black uppercase text-center -mt-20 text-4xl pr-32 ">
            pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-black uppercase text-center -mt-20 text-4xl pr-32">
            soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-black uppercase text-center -mt-20 text-4xl pr-32">
            cake
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-black uppercase text-center -mt-20 text-4xl pr-32">
            salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
