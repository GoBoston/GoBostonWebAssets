import PropTypes from "prop-types";

const TourSnapShot = ({trip}) => {
  return (
    <div className="row y-gap-30 justify-between pt-20">
      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-clock text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Продолжительность:
            <br /> {trip.details.duration}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-customer text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Размер группы:
            <br /> {trip.details.groupSize}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-route text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Отправной город
            <br /> {trip.details.departingCity}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-globe text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Город прибытия <br />
            
            {trip.details.arrivingCity}
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

TourSnapShot.propTypes = {
  trip: PropTypes.shape({
    details: PropTypes.shape({
      duration: PropTypes.string.isRequired,
      groupSize: PropTypes.string.isRequired,
      departingCity: PropTypes.string.isRequired,
      arrivingCity: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default TourSnapShot;
