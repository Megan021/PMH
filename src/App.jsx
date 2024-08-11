import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollOnTop from "./components/ScrollOnTop";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Shop from "./pages/Shop";

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
    <div className="overflow-hidden">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
        <ScrollOnTop />
      </Router>
    </div>
  );
}
