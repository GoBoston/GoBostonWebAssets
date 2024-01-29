import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = () => {
  const navigate = useNavigate();
  const [tripId, setTripId] = useState("");

  return (
    <>
      <div className="mainSearch -w-900 z-2 bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-40">
        <div className="button-grid items-center">
          <LocationSearch tripId={tripId} setTripId={setTripId}/>
          {/* End Location */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            
          </div>
          {/* End check-in-out */}


          <div className="button-item">
            <button
              disabled={tripId === ''}
              className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1"
              onClick={() => navigate("/trips/upcoming/"+tripId.toString())}
            >
              <i className="icon-search text-20 mr-10" />
              {(tripId === '')? 'Выберите поездку': 'Посмотреть'}
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
