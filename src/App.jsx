import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Why from "./components/Why";
import Now from "./components/Now";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import "./App.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Journey />
        <Why />
        <Now />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
