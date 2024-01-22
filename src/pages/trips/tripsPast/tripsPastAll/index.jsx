import Footer2 from "@/components/footer/footer-2";
import Header from "@/components/header";
import CallToActions from "@/components/home/home-2/CallToActions";
import TripPast from "@/components/trip-single/TripPast";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const TripsPastAll = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header noScroll/>
      {/* End Header 2 */}


      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Прошлые поездки</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                Каждая поездка запоминается нам и нашим ученикам по-особенному. Именно поэтому мы храним архив всех поездок.
                </p>
              </div>
            </div>
          </div>
          <TripPast />
        </div>
      </section>

      <CallToActions />
      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default TripsPastAll;
