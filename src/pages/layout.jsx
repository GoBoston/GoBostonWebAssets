import Aos from "aos";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";

import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { store } from "../store/store";

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <Link
          to="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <Provider store={store}>
            {children}
            <SrollTop />
          </Provider>
        </main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node
};


