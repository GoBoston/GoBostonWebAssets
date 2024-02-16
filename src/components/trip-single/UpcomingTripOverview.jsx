import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import trips from "../../data/trips";
import isTextMatched from "../../utils/isTextMatched";

const FilterHotels = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }
  ArrowSlick.propTypes = {
    type: PropTypes.oneOf(["next", "prev"]).isRequired,
    onClick: PropTypes.func.isRequired
  };

  return (
    <>
      {trips.slice(0, 8).map((item) => (
        <div
          className="col-xl-4 col-lg-4 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            to={`/trips/upcoming/${item.id}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div width="100%" height="100%" className="cardImage ratio ratio-1:1" key={i}>
                      <div width="100%" height="100%" className="cardImage__content ">
                        <img
                          className="rounded-4 col-12 js-lazy"
                          src={slide}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tagColor, "dark")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tagColor, "blue")
                        ? "bg-blue-1 text-white"
                        : ""
                    }
                    }
                    `}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.title}</span>
                <p className="text-light-1 lh-18 text-14 mt-5">
                  {item?.description}
                </p>
              </h4>              
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};


export default FilterHotels;
