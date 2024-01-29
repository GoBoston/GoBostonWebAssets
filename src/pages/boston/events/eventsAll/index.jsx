import MetaComponent from "@/components/common/MetaComponent";
import Event from "@/components/events/event";
import Footer2 from "@/components/footer/footer-2";
import Header from "@/components/header";
import CallToActions from "@/components/home/home-2/CallToActions";


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
      



      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">События Бостона</h2>
              </div>
            </div>
          </div>
          <Event />
        </div>
      </section>



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default Events;
