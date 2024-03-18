import Aos from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SrollTop from "./components/common/ScrollTop";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import Home from "./pages";
import About from "./pages/about";
import Apply from "./pages/apply";
import Attraction from "./pages/boston/attractions/attraction";
import Attractions from "./pages/boston/attractions/attractionsAll";
import Event from "./pages/boston/events/event";
import Events from "./pages/boston/events/eventsAll";
import Universities from "./pages/boston/universities/universitiesAll";
import University from "./pages/boston/universities/university";
import TripPast from "./pages/trips/tripsPast/tripPast";
import TripsPastAll from "./pages/trips/tripsPast/tripsPastAll";
import TripsUpcoming from "./pages/trips/tripsUpcoming/tripsUpcomingAll";
import TripUpcoming from "./pages/trips/tripsUpcoming/tripUpcoming";
import { store } from "./store/store";
import Confidentiality from "./pages/confidentiality";
if (typeof window !== "undefined") {
  import("bootstrap");
}


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="trips">
                <Route path="" element={<TripsUpcoming />} />
                <Route path="upcoming">
                  <Route path="" element={<TripsUpcoming />} />
                  <Route path=":id" element={<TripUpcoming />} />
                </Route>
                <Route path="past">
                  <Route path="" element={<TripsPastAll />} />
                  <Route path=":id" element={<TripPast />} />
                </Route>
              </Route>

              <Route path="boston">
                <Route path="universities">
                  <Route path="" element={<Universities />} />
                  <Route path=":id" element={<University />} />
                </Route>

                <Route path="events">
                  <Route path="" element={<Events />} />
                  <Route path=":id" element={<Event />} />
                </Route>

                <Route path="attractions">
                  <Route path="" element={<Attractions />} />
                  <Route path=":id" element={<Attraction />} />
                </Route>
              </Route>

              <Route path="about" element={<About />} />

              <Route path="confidentiality" element={<Confidentiality />} />

              <Route path="apply" element={<Apply />} />

              <Route path="june" element={<Navigate replace to="/trips/upcoming/1" />} />
              <Route path="july" element={<Navigate replace to="/trips/upcoming/2" />} />
              <Route path="august" element={<Navigate replace to="/trips/upcoming/3" />} />
            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
