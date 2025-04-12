import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
import SwiperCore from "swiper";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {

  const items = [
    {title: "کلوت های شهداد", img: "/images/slider/kalout.jpg"},
    {title: "ارگ بم", img: "/images/slider/argbam.jpg"},
    {title: "باغ فتح آباد", img: "/images/slider/baghfathabad.jpg"},
    {title: "باغ شاهزاده ماهان", img: "/images/slider/baghshahzadeh.jpg"},
    {title: "میدان گنجعلی خان", img: "/images/slider/ganjalikhan.jpg"},
    {title: "گنبد جبلیه کرمان", img: "/images/slider/gonbadjabblie.jpg"},
    {title: "شهر سوخته جیرفت", img: "/images/slider/shahrsookhte.jpg"},
  ];



  return (
    <div dir={"ltr px-6"}>
      <Swiper
        dir={"ltr"}
        navigation

        pagination={{clickable: true}}
        className={"absolute !px-6 top-[-120px] md:top-[-150px]"}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 15,
          depth: 60,
          modifier: 3,
          slideShadows: true
        }}
        loop={true}

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

        slidesPerView={5}
        centeredSlides
        height={200}

      >
        {items.map(item => {
          return (
            <SwiperSlide
              className={"w-[80px] shadow relative flex justify-center h-[140px]"}
            >
              <img className={"object-cover w-full h-[200px] rounded-lg"} src={item.img} alt=""/>
              <span className={"absolute bottom-2 text-white z-50 font-bold right-2"}>{item.title}</span>
              <div
                className={"absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-transparent to-black/20 "}></div>
            </SwiperSlide>
          )
        })}



      </Swiper>
    </div>
  );
}
