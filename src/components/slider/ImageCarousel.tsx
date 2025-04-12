import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperCore from "swiper";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  return (
    <div className="App">
      <Swiper
        navigation
        pagination={{clickable: true}}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        style={{height: "500px"}}
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)"
          }}
        >
          Slide 1
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
