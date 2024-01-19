import React, { useState } from "react";
import FilterHotels from "./FilterHotels";

export default function FilterHotels3() {
  const [filterOption, setFilterOption] = useState("hotel");
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h1 className="sectionTitle__title">Предстоящие поездки </h1>
              <p className="text-20 sectionTitle__text mt-5 sm:mt-0">
                Каждую поездку дети посещают туры по местным высшим учебным заведениям. Что примечательно, туры проводятся студентами этих университетов, что позволяет ребятам с первых уст узнать о том, что и как там устроено. В университеты, которые посещают наши клиенты входят такие знаменитые вузы, как Harvard, MIT, Princeton и Columbia.
              </p>
            </div>
          </div>
        </div>
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-10 justify-between items-end">
              <div className="col-auto">
              </div>
              {/* End .col-auto */}

            </div>
            {/* End .row */}

            <div className="relative overflow-hidden pt-40 sm:pt-20">
              <div className="row y-gap-30">
                <FilterHotels />
              </div>
            </div>
            {/* End relative */}
          </div>
        </section>
      </div>
    </section>

  );
}
