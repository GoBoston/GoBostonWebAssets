import PropTypes from "prop-types";

const ImportantInfo = ({trip}) => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Университеты и школы</div>

        <ul className="list-disc">
          {trip.details.program.universities.map((uni)=>(
            <li key={trip.id}>{uni}</li>
          ))}
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Места</div>
        <ul className="list-disc">
          {trip.details.program.places.map((place, index)=>(
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="fw-500 mb-10">Мероприятия</div>
        <ul className="list-disc">
          {trip.details.program.events.map((event, index)=>(
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>


      <div className="col-12">
        <div className="fw-500 mb-10">Дополнительно</div>
        <ul className="list-disc">
          {trip.details.program.additional.map((info, index)=>(
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ImportantInfo.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.string.isRequired,
    details: PropTypes.shape({
      program: PropTypes.shape({
        universities: PropTypes.arrayOf(PropTypes.string).isRequired,
        places: PropTypes.arrayOf(PropTypes.string).isRequired,
        events: PropTypes.arrayOf(PropTypes.string).isRequired,
        additional: PropTypes.arrayOf(PropTypes.string).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default ImportantInfo;
