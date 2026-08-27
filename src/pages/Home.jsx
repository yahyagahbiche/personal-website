import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Why from "../components/Why";
import Now from "../components/Now";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView();
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Journey />
      <Why />
      <Now />
      <About />
      <Contact />
    </>
  );
}
