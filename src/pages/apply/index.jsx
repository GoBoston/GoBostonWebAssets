import ContactForm from "@/components/common/ContactForm";
import MetaComponent from "@/components/common/MetaComponent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CallToActions from "@/components/home/CallToActions";

const metadata = {
  title: "Подать заявку || GoBoston - Развиваемся в пути",
  description: "Подайте заявку на предстоящую поездку заполнив короткую форму.",
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

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default Apply;
