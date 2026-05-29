import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;