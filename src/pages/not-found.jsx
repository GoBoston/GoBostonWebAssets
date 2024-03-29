import CallToActions from "@/components/common/CallToActions";
import MetaComponent from "@/components/common/MetaComponent";
import NotFound from "@/components/common/NotFound";
import DefaultFooter from "@/components/footer/default";
import DefaultHeader from "@/components/header/default-header";

const metadata = {
  title: "404 || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const NotFoundPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default NotFoundPage;
