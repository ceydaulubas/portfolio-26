import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Resume from "./sections/Resume";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Articles />
      <Contact />
      <Resume />
    </div>
  );
};

export default App;
