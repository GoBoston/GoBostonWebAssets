import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { pastTrips } from "@/data/trips.js";

const SlideGallery = () => {
  let params = useParams();
  const id = params.id;
  const trip =
  pastTrips.find((item) => item.id == id);
  const sliderImg = trip.slideImg;

  return (
    <>
      <div className="relative">
        <Swiper
          loop={true}
          spaceBetween={10}
          modules={[Navigation]}
          className="overflow-visible"
          navigation={{
            nextEl: ".js-activity-next-active",
            prevEl: ".js-activity-prev-active",
          }}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
        >
          {sliderImg.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="ratio ratio-64:45">
                <img src={img} alt="image" className="rounded-4 img-ratio" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-activity-prev-active">
          <i className="icon icon-chevron-left text-12" />
        </button>
        <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-activity-next-active">
          <i className="icon icon-chevron-right text-12" />
        </button>

        {/* End prev nav button wrapper */}
      </div>
      {/* slider relative */}
    </>
  );
};

export default SlideGallery;
