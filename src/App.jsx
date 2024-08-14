import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollOnTop from "./components/ScrollOnTop";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import MaybeShowNavbar from "./components/MaybeShowNavbar";
import Wishlist from "./pages/Wishlist";
export default function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
      });
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <MaybeShowNavbar>

      <Navbar />
      </MaybeShowNavbar>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/productDetails' element={<ProductDetails />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/wishList' element={<Wishlist />} />
      </Routes>
      <MaybeShowNavbar>

      {/* <Footer /> */}
      </MaybeShowNavbar>

      <ScrollOnTop />
    </Router>
  );
}
