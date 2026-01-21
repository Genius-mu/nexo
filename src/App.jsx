import { Route, Routes } from "react-router-dom";
import "./App.css";
import NexoWebsite from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import TrainingsPage from "./pages/Trainings";
import TestimonialsPage from "./pages/Testimonials";
import ContactPage from "./pages/Contact";
import FAQPage from "./pages/Faq";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NexoWebsite />} />
        <Route path="/home" element={<NexoWebsite />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
