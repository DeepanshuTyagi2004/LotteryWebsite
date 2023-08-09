import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import { Footer } from "./components/Footer";
import Game from "./components/Game";
import Prize from "./components/Prize";
import News from "./components/News";
import Contact from "./components/Contact";
import { useState } from "react";

function Single() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <main className=" overflow-hidden">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero />
      <About />
      <Game />
      <Prize />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}

export default Single;
