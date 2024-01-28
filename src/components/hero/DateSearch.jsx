import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import trips from "@/data/trips";

const DateSearch = ({tripId}) => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);[ "23/06/2024", "02/07/2024" ]

  let datesDef = [];
  if(tripId){
    const trip = trips.find((e) => (e.id === tripId));
    const start = trip.dates.start.split('/');
    const end = trip.dates.end.split('/');
    
  }
  const [dates, setDates] = useState(datesDef);
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
       
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        disabled
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
