import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DestinationsIndia from "./pages/DestinationsIndia";
import DestinationsWorld from "./pages/DestinationsWorld";
// import PackagesNational from "./pages/PackagesNational";
// import PackagesInternational from "./pages/PackagesInternational";
import packagesNational from ".pages/packagesNational";
import packagesInternational from ".pages/packagesInternational";
import BookingDetails from "./pages/BookingDetails";
import Login from "./pages/Login";
import About from "./pages/About";
import SearchResults from "./pages/SearchResult";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/destinations/india" element={<DestinationsIndia />} />
        <Route path="/destinations/world" element={<DestinationsWorld />} />
        <Route path="/packages/national" element={<PackagesNational />} />
        <Route path="/packages/international" element={<PackagesInternational />} />
        <Route path="/booking/:id" element={<BookingDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}