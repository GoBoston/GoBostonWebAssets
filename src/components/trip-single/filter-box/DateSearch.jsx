import PropTypes from "prop-types";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({trip}) => {

  const start = trip.dates.start.split("/");
  const end = trip.dates.end.split("/");

  const dates = [
    new DateObject({
      year: start[2],
      month: start[1],
      day: start[0]
    }),
    new DateObject({
      year: end[2],
      month: end[1],
      day: end[0]
    }),
  ];
  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
        disabled
      />
    </div>
  );
};

DateSearch.propTypes = {
  trip: PropTypes.shape({
    dates: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};


export default DateSearch;
