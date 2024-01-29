import { Link } from "react-router-dom";

import DateSearch from "./DateSearch";

const index = ({trip}) => {
  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Date</h4>
            <DateSearch trip={trip}/>
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}


      <div className="col-12">
        <Link
          to="/apply"
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
        >
          Подать заявку
        </Link>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
