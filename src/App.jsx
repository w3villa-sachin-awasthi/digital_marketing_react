import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Protected from "./config/Protected";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import SectionCourausal from "./components/SectionCourausal";
import AgencySection from "./components/AgencySection";
function App() {
  return (
    <div className="w-full bg-slate-50 box-border overflow-hidden">
      <div className="text-slate-950 max-w-[1600px] mx-auto">
        <Header />
        <HeroSection />
        <Section3 />
      </div>
      <div className="text-slate-950 bg-orange-100">
        <Section4 />
      </div>
      <div className="text-slate-950 max-w-[1600px] mx-auto">
        <AgencySection />
        <SectionCourausal />
      </div>
      <div className="text-slate-950 bg-orange-100">
        <Footer />
      </div>
    </div>
  );
}


export default App;
