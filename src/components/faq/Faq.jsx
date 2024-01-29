import PropTypes from "prop-types";

const Faq = ({trip}) => {
  return (
    <>
      {trip.details.faq.map((item, index) => (
        <div className="col-12" key={index}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#q${index}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.q}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={"q"+index}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.a}</p>
              </div>
            </div>
            {/* End accordion conent */}
          </div>
        </div>
      ))}
    </>
  );
};

Faq.propTypes = {
  trip: PropTypes.shape({
    details: PropTypes.shape({
      faq: PropTypes.arrayOf(
        PropTypes.shape({
          q: PropTypes.string.isRequired,
          a: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};


export default Faq;
