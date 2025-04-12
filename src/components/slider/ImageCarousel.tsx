import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
import SwiperCore from "swiper";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {

  const items = [
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},
    {title: "میدان امیرچخماق خان", img: "/images/slider/img1.png"},

  ];



  return (
    <div >
      <Swiper
        navigation
        pagination={{clickable: true}}
        className={"absolute top-[-90px] md:top-[-150px]"}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 15,
          depth: 60,
          modifier: 4,
          slideShadows: false
        }}

        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          720: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 5
          }
        }}
        slidesPerView={6}
        centeredSlides

      >
        {items.map(item => {
          return (
            <SwiperSlide
              className={"w-[80px] flex justify-center h-[140px]"}
            >
              <img src={item.img} alt=""/>
            </SwiperSlide>
          )
        })}



      </Swiper>
    </div>
  );
}
