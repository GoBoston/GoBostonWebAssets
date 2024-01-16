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
import Trip from "./pages/trip"
import About from "./pages/about";
import TripsUpcoming from "./pages/tripsUpcoming"



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
                <Route path="" element={<Home />} />
                <Route path="upcoming" element={<TripsUpcoming />} />
                <Route path=":id" element={<Trip />} />
              </Route>

              <Route path="about" element={<About />} />
              

              {/* <Route path="blog-list-v1" element={<BlogListV1 />} />
              <Route path="blog-list-v2" element={<BlogListV2 />} />
              <Route path="blog-details/:id" element={<BlogSingleDynamic />} />

              <Route path="404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />

              <Route path="about" element={<About />} />
              <Route path="become-expert" element={<BecomeExpert />} />
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="terms" element={<Terms />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="contact" element={<Contact />} />
              <Route path="destinations" element={<Destinations />} />

              <Route path="dashboard">
                <Route path="db-dashboard" element={<DBDashboard />} />
                <Route path="db-booking" element={<DBBooking />} />
                <Route path="db-wishlist" element={<DBWishlist />} />
                <Route path="db-settings" element={<DBSettings />} />
              </Route>

              <Route path="vendor-dashboard">
                <Route path="dashboard" element={<VendorDashboard />} />
                <Route path="add-hotel" element={<VendorAddHotel />} />
                <Route path="booking" element={<VendorBooking />} />
                <Route path="hotels" element={<BVVendorHotel />} />
                <Route path="recovery" element={<BDVendorRecovery />} />
              </Route>

              <Route path="hotel-list-v1" element={<HotelListPage1 />} />
              <Route path="hotel-list-v2" element={<HotelListPage2 />} />
              <Route path="hotel-list-v3" element={<HotelListPage3 />} />
              <Route path="hotel-list-v4" element={<HotelListPage4 />} />
              <Route path="hotel-list-v5" element={<HotelListPage5 />} />
              <Route
                path="hotel-single-v1/:id"
                element={<HotelSingleV1Dynamic />}
              />
              <Route
                path="hotel-single-v2/:id"
                element={<HotelSingleV2Dynamic />}
              />
              <Route path="booking-page" element={<BookingPage />} />

              <Route path="tour-list-v1" element={<TourListPage1 />} />
              <Route path="tour-list-v2" element={<TourListPage2 />} />
              <Route path="tour-list-v3" element={<TourListPage3 />} />
              <Route path="tour-single/:id" element={<TourSingleV1Dynamic />} />

              <Route path="activity-list-v1" element={<ActivityListPage1 />} />
              <Route path="activity-list-v2" element={<ActivityListPage2 />} />
              <Route path="activity-list-v3" element={<ActivityListPage3 />} />
              <Route
                path="activity-single/:id"
                element={<ActivitySingleV1Dynamic />}
              />

              <Route path="rental-list-v1" element={<RentalListPage1 />} />
              <Route path="rental-list-v2" element={<RentalListPage2 />} />
              <Route path="rental-list-v3" element={<RentalListPage3 />} />
              <Route
                path="rental-single/:id"
                element={<RentalSingleV1Dynamic />}
              />

              <Route path="car-list-v1" element={<CarListPage1 />} />
              <Route path="car-list-v2" element={<CarListPage2 />} />
              <Route path="car-list-v3" element={<CarListPage3 />} />
              <Route path="car-single/:id" element={<CarSingleV1Dynamic />} />

              <Route path="cruise-list-v1" element={<CruiseListPage1 />} />
              <Route path="cruise-list-v2" element={<CruiseListPage2 />} />
              <Route path="cruise-list-v3" element={<CruiseListPage3 />} />
              <Route
                path="cruise-single/:id"
                element={<CruiseSingleV1Dynamic />}
              />

              <Route path="flight-list-v1" element={<FlightListPage1 />} /> */}
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
