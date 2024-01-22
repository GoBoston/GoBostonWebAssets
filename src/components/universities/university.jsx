import { Link } from "react-router-dom";
import universityData from "../../data/universities";

const University = () => {

  return (
    <>
      <div className="tabs -pills-3 pt-30 js-tabs">
        {/* End tab-controls */}

        <div className="row y-gap-30 pt-30">
          {universityData.slice(0, 9).map((item) => (
            <div className="col-lg-4 col-sm-6" key={item.id}>
              <Link
                to={`/boston/universities/${item.id}`}
                className="blogCard -type-1 d-block "
              >
                <div className="blogCard__image">
                  <div className="rounded-8">
                    <img
                      style={{height: 250, width: 150}}
                      className="cover w-100 img-fluid"
                      src={item.img}
                      alt="image"
                    />
                  </div>
                  <div className="pt-20">
                    <h4 className="text-dark-1 text-18 fw-500">{item.title}</h4>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* End .row */}
      </div>
    </>
  );
};

export default University;
