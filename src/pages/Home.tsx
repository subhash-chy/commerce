import { Products } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Swiper.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { ads } from "../constants/ads";

SwiperCore.use([Autoplay]);

function Home() {
  return (
    <>
      {/* Swiper */}
      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ads.map((ad, id) => (
            <SwiperSlide key={id}>
              <div className="slides">
                <img
                  className="slide-image"
                  src={ad.img}
                  alt={`ad ${id + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <h2>All products</h2>
        <Products />
      </div>
    </>
  );
}

export default Home;
