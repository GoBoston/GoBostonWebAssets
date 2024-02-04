import MetaComponent from "@/components/common/MetaComponent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CallToActions from "@/components/home/CallToActions";
import UpcomingTrips from "@/components/trip-single/UpcomingTrips";

const metadata = {
  title: "Предстоящие поездки || GoBoston - Развиваемся в пути",
  description: "Предстоящие поездки GoBoston. Узнайте больше о возможностях зарубежом.",
};

const TripsUpcoming = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header noScroll/>
      {/* End Header 2 */}

      <UpcomingTrips />


      {/* End Best Seller Hotels Sections */}



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default TripsUpcoming;
