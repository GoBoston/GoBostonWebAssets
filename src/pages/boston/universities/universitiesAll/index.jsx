import Footer2 from "@/components/footer/footer-2";
import Header from "@/components/header";
import CallToActions from "@/components/home/home-2/CallToActions";
import University from "@/components/universities/university";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Главная страница || GoBoston - Развиваемся в пути",
  description: "GoBoston - Развиваемся в пути",
};

const Universities = () => {
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
                <h2 className="sectionTitle__title">Университеты Бостона</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                В Массачусетсе есть сто четырнадцать колледжей и университетов, которые включены в Классификацию высших учебных заведений Карнеги. Эти учреждения включают в себя четырнадцать исследовательских университетов, двадцать один магистерский университет и тридцать четыре специальных учебных заведения. Восемьдесят пять из них являются частными, из которых пять являются коммерческими. Тридцать государственных высших учебных заведений являются государственными, в число которых не входит Массачусетский технологический институт, который был основан в соответствии с Законом о земельных правах Моррилла, но позднее стал частным учреждением.

                Гарвардский университет – старейшее высшее учебное заведение штата, основанное в 1636 году. Бостонский университет является крупнейшим в штате высшим учебным заведением с точки зрения зачисления студентов. Осенью 2013 года в нем обучается 32 603 учащихся, а в Школе ландшафтного дизайна имени Конвея – самый маленький колледж штата с зачислением в школу. Университет Массачусетса в Амхерсте является крупнейшим государственным университетом штата, в котором обучается 28 518 студентов. Массачусетс также является домом для ряда всемирно признанных университетов, в том числе Гарварда и Массачусетского технологического института, которые входят в десятку лучших университетов мира.
                </p>
              </div>
            </div>
          </div>
          <University />
        </div>
      </section>



      <CallToActions />
      {/* End CallToActions Section */}

      <Footer2 />
      {/* End Footer Section */}
    </>
  );
};

export default Universities;
