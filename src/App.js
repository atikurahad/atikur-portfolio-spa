// import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Card />
      <About />

      <Footer />
    </div>
  );
}

export default App;
