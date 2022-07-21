import { Products } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Swiper.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay]);

function Home() {
  const ads = [
    "https://icms-image.slatic.net/images/ims-web/828b66b4-f4f0-4930-ae11-6e66565b1e1d.jpg_1200x1200.jpg",
    "https://icms-image.slatic.net/images/ims-web/454b692e-4d1d-4ded-8a57-92001d62fb61.jpg",
    "https://icms-image.slatic.net/images/ims-web/1f0684f8-b8ba-4161-8348-0b2e35c576f0.jpg",
    "https://icms-image.slatic.net/images/ims-web/a2f6ac10-1c40-4824-9a7f-609dff95493a.jpg",
    "https://icms-image.slatic.net/images/ims-web/54c5ac85-4269-49f5-a99e-0ff3a91091f1.jpg",
    "https://icms-image.slatic.net/images/ims-web/cb2ec7e0-9fbd-46e7-8265-6607f2c4a07c.png",
    "https://icms-image.slatic.net/images/ims-web/e8caf407-8c83-4056-bd93-800378e11f51.jpg",
  ];

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
                <img className="slide-image" src={ad} alt={`ad ${id + 1}`} />
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
