import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import MyWorkPage from "./pages/MyWorkPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<MyWorkPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}
