import CallToActions from "@/components/home/home-2/CallToActions";
import Block1 from "@/components/about/Block1";
import Block2 from "@/components/about/Block2";
import Testimonial from "@/components/testimonial/Testimonial";
import Footer2 from "@/components/footer/footer-2";
import MetaComponent from "@/components/common/MetaComponent";
import Header from "@/components/header";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const About = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <img src="/img/pages/about/1.png" alt="image" />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                GoBoston — это компания которая организовывает образовательные поездки для школьников в Америку.
              </h1>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block2 />
          </div>
        </div>
      </section>
      {/* End team section */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Отзывы наших клиентов
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="overflow-hidden pt-80 js-section-slider">
            <div className="item_gap-x30">
              <Testimonial />
            </div>
          </div>
          {/* End .overflow-hidden */}

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer2 />
      {/* End Call To Actions Section */}
    </>
  );
};

export default About;
