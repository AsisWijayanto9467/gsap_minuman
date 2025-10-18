import React from 'react';
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Minuman from "./components/Minuman.jsx";
import About from "./components/About.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
        <Navbar  />
        <Hero />
        <Minuman />
        <About />
    </main>
  );
};

export default App;
