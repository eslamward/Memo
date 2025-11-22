import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import images from "../assets/images/images";

function Slider() {
  return (
    <main className="container bg-background-light dark:bg-background-dark mx-auto mt-8 flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full max-w-7xl h-[70vh]"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="transition-transform duration-500 ease-in-out"
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-[70vh] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="px-6 py-2 bg-white/90 text-gray-800 rounded-full font-semibold hover:bg-white transition">
                  View
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Slider;
