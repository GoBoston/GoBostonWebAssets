import "photoswipe/dist/photoswipe.css";

import { pastTrips } from "@/data/trips.js";

import Header from "@/components/header";


import Overview from "@/components/trip-single/TripOverview";
import CallToActions from "@/components/home/home-2/CallToActions";
import Footer2 from "@/components/footer/footer-2";
import { Link, useParams } from "react-router-dom";
import SlideGallery from "@/components/trip-single/SlideGallery";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Activity Single || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const TripPast = () => {
  let params = useParams();
  const id = params.id;
  const trip =
  pastTrips.find((item) => item.id == id) || blogs[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}


      <section className="pt-40">
        <div className="container">
          <SlideGallery />
        </div>
      </section>
      {/* End gallery grid wrapper */}

      <section className="pt-40 js-pin-container">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="row y-gap-20 justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{trip?.title}</h1>
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
      {/* End single page content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer2 />
    </>
  );
};

export default TripPast;
