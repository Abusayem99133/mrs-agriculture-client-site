import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "animate.css";

import img1 from "../../assets/image/banner/iStock-1370265820-679x419.jpg";
import img2 from "../../assets/image/banner/agriculture-pictures-ppsj59vfqlop02h9.jpg";

const Banner = () => {
  return (
    <section>
      <div>
        <Swiper
          sliderPreview={1}
          spaceBetween={30}
          loop={true}
          // pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              sliderPreview: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content  text-white text-center">
                <div className="">
                  <p className="mb-5 text-4xl animate__animated animate__backInLeft">
                    Handmade Products
                  </p>
                  <h1 className="mb-5 text-7xl font-bold animate__animated animate__backInRight">
                    Agriculture Matter <br />
                    For Future
                  </h1>
                  <button
                    data-aos="fade-up"
                    className=" btn rounded-full  bg-gradient-to-r from-green-600 via-green-400-500 to-yellow-500 text-2xl text-white"
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${img2})`,
              }}
            >
              <div className="hero-overlay bg-opacity-50"></div>
              <div className="hero-content  text-white text-center">
                <div className="">
                  <p className="mb-5 text-4xl animate__animated animate__backInRight">
                    Original & Natural
                  </p>
                  <h1 className="mb-5 text-7xl font-bold animate__animated animate__backInLeft">
                    Organic & Agriculture <br />
                    Products
                  </h1>
                  <button
                    data-aos="fade-up"
                    className=" btn rounded-full  bg-gradient-to-r from-green-600 via-green-400-500 to-yellow-500 text-2xl text-white"
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
