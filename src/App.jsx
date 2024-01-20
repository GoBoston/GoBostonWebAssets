import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";



import Home from "./pages";
import TripUpcoming from "./pages/trips/tripsUpcoming/tripUpcoming"
import About from "./pages/about";
import TripsUpcoming from "./pages/trips/tripsUpcoming/tripsUpcomingAll"
import TripsPastAll from "./pages/trips/tripsPast/tripsPastAll";
import TripPast from "./pages/trips/tripsPast/tripPast";
import Attractions from "./pages/boston/attractions/attractionsAll";
import Attraction from "./pages/boston/attractions/attraction";
import Universities from "./pages/boston/universities/universitiesAll";
import University from "./pages/boston/universities/university";
import Events from "./pages/boston/events/eventsAll";
import Event from "./pages/boston/events/event";
import Apply from "./pages/apply";



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
                  <Route path=":name" element={<University />} />
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

              <Route path="apply" element={<Apply />} />
              
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
