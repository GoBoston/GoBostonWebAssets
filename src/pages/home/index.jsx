
import MetaComponent from "@/components/common/MetaComponent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import BlockGuide from "@/components/home/BlockGuide";
import CallToActions from "@/components/home/CallToActions";
import Testimonial from "@/components/home/Testimonial";
import TestimonialRating from "@/components/home/TestimonialRating";
import Search from "@/components/search";
import TripPast from "@/components/trip-single/TripPast";
import UpcomingTrips from "@/components/trip-single/UpcomingTrips";


const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути. Узнайте больше о возможностях зарубежом.",
};

const Home = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header/>
      {/* End Header */}

      <Search />
      {/* End Search */}


      <section className="layout-pt-lg layout-pb-md bg-dark-3">
        <div className="container">
          <div className="row y-gap-40 sm:y-gap-10 justify-between">
            <BlockGuide />
          </div>
        </div>
      </section>
      {/* End travel block sections */}

      <UpcomingTrips />

      {/* End Best Seller Hotels Sections */}

      <section className="layout-pt-lg layout-pb-lg bg-dark-3">
        <div className="container">
          <div className="row y-gap-60">
            <div className="col-xl-5 col-lg-6">
              <TestimonialRating />
            </div>
            {/* End .col */}

            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

        </div>
      </section>
      {/* End testimonial and brand sections Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Прошедшие поездки
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Каждая поездка запоминается нам и нашим ученикам по-особенному.
                  Именно поэтому мы храним архив всех поездок.
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <TripPast />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default Home;
