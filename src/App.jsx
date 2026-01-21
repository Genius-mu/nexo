import { Route, Routes } from "react-router-dom";
import "./App.css";
import NexoWebsite from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import TrainingsPage from "./pages/Trainings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NexoWebsite />} />
        <Route path="/home" element={<NexoWebsite />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trainings" element={<TrainingsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
