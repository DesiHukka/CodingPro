import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroStrip from "./components/HeroStrip";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Offerings from "./components/Offerings";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroStrip />
      <Features />
      <Programs />
      <Offerings />
    </div>
  );
}

export default App;
