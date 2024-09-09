import "swiper/css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import pro1 from "../../assets/image/services/11.jpg";
import pro2 from "../../assets/image/services/22.jpg";
import pro3 from "../../assets/image/services/33.jpg";
import pro4 from "../../assets/image/services/44.jpg";
const ServicesCard = () => {
  return (
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
            <img className="" src={pro1} alt="" />
            <div className="p-7 bg-white">
              <h2 className="text-2xl font-bold my-2">Agriculture Products</h2>
              <p>
                Coming merits and was talent enough far. Sir joy northward
                sportsmen. education. Discovery incommode earnestly no.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-xl">
            <img className="" src={pro2} alt="" />
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
            <img className="" src={pro3} alt="" />
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
            <img className="" src={pro4} alt="" />
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
  );
};

export default ServicesCard;
