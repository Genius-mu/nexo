import { Route, Routes } from "react-router-dom";
import "./App.css";
import NexoWebsite from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NexoWebsite />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
