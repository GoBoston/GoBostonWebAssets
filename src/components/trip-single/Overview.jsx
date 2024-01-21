import { useState, useEffect } from "react";
import getCost from "@/utils/costCalculator";

const Overview = ({trip}) => {
  const [cost, setCost] = useState({ usd: 0, kzt: 0 });

    useEffect(() => {
        const fetchCost = async () => {
            const costData = await getCost(trip.cost.default);
            setCost(costData);
        };

        fetchCost();
    }, [trip.cost.default]); // dependency array ensures this runs only when trip.cost.default changes

  return (
    <>
      <div className="row x-gap-40 y-gap-40 ">
        <div className="col-12">
          <h3 className="text-22 fw-500">Описание поездки</h3>

          {trip.details.info.map((paragraph) => (
            <p className="text-dark-1 text-15 mt-20">{paragraph}</p>
          ))}
        </div>

        <div className="col-md-6 border-top-light">
          <h5 className="text-16 fw-500">Даты Поездки</h5>
          <div className="text-15 mt-10">
            {trip.dates.start} - {trip.dates.end}
          </div>
        </div>

        <div className="col-md-6 border-top-light">
          <h5 className="text-16 fw-500">Стоимость Поездки</h5>
          <div className="text-15 mt-10">
            {cost.usd}$ ({cost.kzt}KZT)
          </div>
        </div>
      </div>

      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">В стоимость включено</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6">
                {trip.details.included.map((point) => (
                  <div className="text-dark-1 text-15">
                    <i className="icon-check text-10 mr-10"></i>
                    {point}
                  </div>
                ))}
              </div>

              <div className="col-md-6">
              {trip.details.notIncluded.map((point) => (
                  <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> 
                  {point}
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
