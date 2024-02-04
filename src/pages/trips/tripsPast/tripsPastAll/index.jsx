import MetaComponent from "@/components/common/MetaComponent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CallToActions from "@/components/home/CallToActions";
import TripPast from "@/components/trip-single/TripPast";


const metadata = {
  title: "Прошлые поездки || GoBoston - Развиваемся в пути",
  description: "Результаты прошлых поездок GoBoston.",
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

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default TripsPastAll;
