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
      <ContactForm />

      {/* End contact section form */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default Apply;
