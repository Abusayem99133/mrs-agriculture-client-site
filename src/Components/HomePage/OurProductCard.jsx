import "swiper/css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ourPro1 from "../../assets/image/ourProducts/1.png";
import ourPro2 from "../../assets/image/ourProducts/2.png";
import ourPro3 from "../../assets/image/ourProducts/3.png";
import ourPro4 from "../../assets/image/ourProducts/4.png";
const OurProductCard = () => {
  return (
    <div>
      <div>
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="shadow-xl">
                <img className="w-66" src={ourPro1} alt="" />
                <div className="p-7 bg-white">
                  <h2 className="text-2xl font-bold my-2">
                    Agriculture Products
                  </h2>
                  <p>
                    Coming merits and was talent enough far. Sir joy northward
                    sportsmen. education. Discovery incommode earnestly no.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-xl">
                <img className="w-66" src={ourPro2} alt="" />
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold my-2">Fresh Vegetables </h2>
                  <p>
                    Coming merits and was talent enough far. Sir joy northward
                    sportsmen. education. Discovery incommode earnestly no.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-xl">
                <img className="w-50" src={ourPro3} alt="" />
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold my-2">OrganicProducts</h2>
                  <p>
                    Coming merits and was talent enough far. Sir joy northward
                    sportsmen. education. Discovery incommode earnestly no.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shadow-xl">
                <img className="w-50" src={ourPro4} alt="" />
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold my-2">Dairy Products</h2>
                  <p>
                    Coming merits and was talent enough far. Sir joy northward
                    sportsmen. education. Discovery incommode earnestly no.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default OurProductCard;
