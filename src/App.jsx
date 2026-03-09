import Hero from "./components/Hero";
import Works from "./components/Works";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <Hero />
      <Works />
      <Services />
      <Experience />
      <Contact />
    </ReactLenis>
  );
}

export default App;
