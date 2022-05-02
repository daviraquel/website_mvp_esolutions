// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CarouselContainer } from "./Carousel.styled";

export const Carousel = ({ imgList }) => {
  return (
    <CarouselContainer>
      <h2>Galeria</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {imgList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="imgContainer">
              <img src={item.img} alt={item.alt} />
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
