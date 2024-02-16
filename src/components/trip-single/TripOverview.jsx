import { useParams } from "react-router-dom";

import { pastTrips } from "../../data/trips.js";

const Overview = () => {
  let params = useParams();
  const id = params.id;
  const trip = pastTrips.find((item) => item.id == id);
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-500">Обзор поездки</h3>
          {trip.info.map((p, index)=> (<p key={index} className="text-dark-1 text-15 mt-20">{p}</p>))}
        </div>
      </div>

    </>
  );
};

export default Overview;