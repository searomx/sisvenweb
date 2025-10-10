import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VideoCarousel() {
  const videos = [
    "./videos/video-equipe1.mp4",
    "./videos/video-equipe2.mp4",
    "./videos/video-equipe3.mp4",
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      loop
      spaceBetween={30}
      slidesPerView={1}
      fadeEffect={{ crossFade: true }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {videos.map((src, index) => (
        <SwiperSlide key={index}>
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "70vh",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
