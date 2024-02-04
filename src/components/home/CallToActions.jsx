import { Link } from "react-router-dom";

const CallToActions = () => {
  return (
    <section className="pt-80 pb-80 bg-green-1">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Есть вопросы?</h2>
              <p className="text-dark-1 sectionTitle__text mt-5 sm:mt-0">
                Давайте обсудим! Вы можете почитать информацию о поездках на нашем сайте, либо связаться с нами в Whatsapp. 
              </p>
            </div>
          </div>
          {/* End .col left */}

          <div className="col-auto">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-auto">
                <Link
                  to="/trips/upcoming"
                  className="button px-40 h-60 -blue-1 text-blue-1 border-blue-1"
                >
                  Поездки
                  <i className="icon-arrow-top-right ml-10"></i>
                </Link>
              </div>
              {/* End sign in button */}

              <div className="col-auto">
                <Link
                  to="https://wa.me/+77771796886"
                  className="button px-40 h-60 -blue-1 bg-yellow-1 text-dark-1"
                >
                  Написать в Whatsapp
                  <i className="icon-arrow-top-right ml-10"></i>
                </Link>
              </div>
              {/* End /register btn */}
            </div>
          </div>
          {/* End call right */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default CallToActions;
