// components/CoverflowSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "./images/team.png",
  "./images/work-team.png",
  "/images/img2.png",
  //   "/images/img4.jpg",
];

const Slider: React.FC = () => {
  return (
    <div style={{ width: "100%", padding: "40px 0" }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={400}
              priority={true}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
