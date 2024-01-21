import "photoswipe/dist/photoswipe.css";

import trips from "@/data/trips";

import Header from "@/components/header";


import Overview from "@/components/trip-single/Overview";
import TourSnapShot from "@/components/trip-single/TourSnapShot";
import SidebarRight from "@/components/trip-single/SidebarRight";
import Footer2 from "@/components/footer/footer-2";
import Faq from "@/components/faq/Faq";
import { Link, useParams } from "react-router-dom";
import ImportantInfo from "@/components/trip-single/ImportantInfo";
import SlideGallery from "@/components/trip-single/SlideGallery";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Activity Single || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const TripUpcoming = () => {
  let params = useParams();
  const id = params.id;
  const trip = trips.find((item) => item.id == id) || trips[0];

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
                  <h1 className="text-26 fw-600">{trip.details.name}</h1>
                  <div className="row x-gap-10 y-gap-20 items-center pt-10">
                    {/* End .col */}

                  </div>
                  {/* End .row */}
                </div>
                {/* End .col */}

                
              </div>
              {/* End .row */}

              <h3 className="text-22 fw-500 mt-40">Краткая информация</h3>
              <TourSnapShot trip={trip} />
              {/* End toursnapshot */}
              <div className="border-top-light mt-40 mb-40"></div>

              <Overview trip={trip} />
              {/* End  Overview */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight trip={trip} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row x-gap-40 y-gap-40">
              <div className="col-auto">
                <h3 className="text-22 fw-500">Программа поездки</h3>
              </div>
            </div>
            {/* End row */}
            <ImportantInfo trip={trip}/>
          </div>
          {/* End pt-40 */}
        </div>
        {/* End .container */}
      </section>
      {/* End important info */}



      <section className="mt-40">
        <div className="container ">
          <div className="pt-40 border-top-light">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  Часто задаваемые 
                  <br /> вопросы
                </h2>
              </div>
              {/* End .row */}

              <div className="col-lg-8 mb-40">
                <div
                  className="accordion -simple row y-gap-20 js-accordion"
                  id="Faq1"
                >
                  <Faq trip={trip}/>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End .pt-40 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Faq about sections */}


      <Footer2 />
    </>
  );
};

export default TripUpcoming;
