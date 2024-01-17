import Footer2 from "@/components/footer/footer-2";
import Header from "@/components/header";
import CallToActions from "@/components/home/home-2/CallToActions";
import FilterHotels3 from "@/components/hotels/FilterHotels3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const Events = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header noScroll/>
      {/* End Header 2 */}
      



      <div>Events All</div>
      <div>Events All</div>
      <div>Events All</div>
      <div>Events All</div>
      <div>Events All</div>
      <div>Events All</div>



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default Events;
