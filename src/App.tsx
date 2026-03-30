import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Articles />
      <Contact />
    </div>
  );
};

export default App;
