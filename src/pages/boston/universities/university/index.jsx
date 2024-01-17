import Footer2 from "@/components/footer/footer-2";
import Header from "@/components/header";
import CallToActions from "@/components/home/home-2/CallToActions";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const University = () => {
    let params = useParams();
    const id = params.id;
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <Header noScroll/>
      {/* End Header 2 */}
      



      <div>University {id}</div>
      <div>University {id}</div>
      <div>University {id}</div>
      <div>University {id}</div>
      <div>University {id}</div>
      



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default University;
