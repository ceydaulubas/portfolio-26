import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Resume from "./sections/Resume";

const App = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Articles />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;
