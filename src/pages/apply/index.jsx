import CallToActions from "@/components/home/home-2/CallToActions";
import Header from "@/components/header";
import Footer2 from "@/components/footer/footer-2";
import ContactForm from "@/components/common/ContactForm";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const Apply = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}
      <Header noScroll />
      {/* End Header 2 */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Подать заявку</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Заполните форму ниже что бы проявить инициативу!
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      

      {/* End contact section form */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default Apply;
