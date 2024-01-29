import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import FilterBox from "./filter-box";

import getCost from "@/utils/costCalculator";


const SidebarRight = ({ trip }) => {
  const [cost, setCost] = useState({ usd: 0, kzt: 0 });

  useEffect(() => {
    const fetchCost = async () => {
      const costData = await getCost(trip.cost.default);
      setCost(costData);
    };

    fetchCost();
  }, [trip.cost.default]); // dependency array ensures this runs only when trip.cost.default changes

  return (
    <div className="d-flex justify-end js-pin-content">
      <div className="w-360 lg:w-full d-flex flex-column items-center">
        <div className="px-30 py-30 rounded-4 border-light bg-white shadow-4">
          <div className="text-14 text-light-1">
            Стоимость: {" "}
            <span className="text-20 fw-500 text-dark-1 ml-5">
              {cost.usd}$ ({cost.kzt} KZT)
            </span>
          </div>
          {/* End div */}

          <div className="row y-gap-20 pt-30">
            <FilterBox trip={trip}/>
          </div>
          {/* End div */}

          <div className="d-flex items-center pt-20">
            <div className="size-40 flex-center bg-light-2 rounded-full">
              <i className="icon-heart text-16 text-green-2" />
            </div>
            <div className="text-14 lh-16 ml-10">
              Заявки принимаются до {trip.deadline}
            </div>
          </div>
        </div>
        {/* End px-30 */}
      </div>
    </div>
  );
};

SidebarRight.propTypes = {
  trip: PropTypes.shape({
    cost: PropTypes.shape({
      default: PropTypes.number.isRequired
    }).isRequired,
    deadline: PropTypes.string.isRequired
  }).isRequired
};

export default SidebarRight;
