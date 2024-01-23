import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { pastTrips } from "../../data/trips.js";
import TripPagination from "./TripPagination";

const TripPast = () => {
  const [filterOption, setFilterOption] = useState("art_culture");
  const [filteredItems, setFilteredItems] = useState([]);

  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {pastTrips.slice(0, 9).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link
                to={`/trips/past/${item.id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img
                      className="cover w-100 img-fluid"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                </div>
                <div className="pt-20">
                  <h4 className="text-dark-1 text-18 fw-500">{item?.name}</h4>
                  <div className="text-light-1 text-15 lh-14 mt-5">
                    {item?.dates.start} - {item?.dates.end}: {item?.title}, {item?.location}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}
        <TripPagination />
      </div>
    </>
  );
};

export default TripPast;
