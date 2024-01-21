const ImportantInfo = ({trip}) => {
  return (
    <div className="row x-gap-40 y-gap-40 justify-between pt-20">
      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Университеты и школы</div>

        <ul className="list-disc">
          {trip.details.program.universities.map((uni)=>(
            <li>{uni}</li>
          ))}
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="fw-500 mb-10">Места</div>
        <ul className="list-disc">
          {trip.details.program.places.map((place)=>(
            <li>{place}</li>
          ))}
        </ul>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="fw-500 mb-10">Мероприятия</div>
        <ul className="list-disc">
          {trip.details.program.events.map((event)=>(
            <li>{event}</li>
          ))}
        </ul>
      </div>


      <div className="col-12">
        <div className="fw-500 mb-10">Дополнительно</div>
        <ul className="list-disc">
          {trip.details.program.additional.map((info)=>(
            <li>{info}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImportantInfo;
