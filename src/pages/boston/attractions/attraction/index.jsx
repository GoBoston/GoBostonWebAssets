import { useParams } from "react-router-dom";

import Overview from "@/components/attractions/AttractionOverview";
import MetaComponent from "@/components/common/MetaComponent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CallToActions from "@/components/home/CallToActions";
import attractions from "@/data/attractions";

const metadata = {
  title: "Аттракцион || GoBoston - Развиваемся в пути",
  description: "Узнайте больше об атракционах Бостона",
};

const Attraction = () => {
  let params = useParams();
  const id = params.id;
  const attraction =
     attractions.find((item) => item.id == id) || attractions[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header noScroll/>
      {/* End Header 2 */}
      



      <section style={{height:600}} className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <img style={{filter: "brightness(50%)", height:600 }} src={attraction.img} alt="image" />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                {attraction?.details}
              </h1>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{attraction?.title}</h1>
                  <div className="row x-gap-10 y-gap-20 items-center pt-10">
                    <div className="col-auto">
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-top-light mt-40 mb-40"></div>

              <Overview />
              {/* End  Overview */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default Attraction;
