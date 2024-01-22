import events from "../../data/events.js";
import { useParams } from "react-router-dom";

const Overview = () => {
    let params = useParams();
    const id = params.id;
    const event = events.find((item) => item.id == id)
    return (
      <>
        <div className="row x-gap-40 y-gap-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">Overview</h3>
  
            <p className="text-dark-1 text-15 mt-20">
            {event.info}
            </p>
  
          </div>
  
        </div>
  
      </>
    );
  };

  export default Overview;