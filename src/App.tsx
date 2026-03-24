import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-32 px-6 max-w-6xl mx-auto text-white">
        <h1 className="text-6xl font-bold mb-4">Software Developer.</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Hello, i'm ceyda tanfener, a software developer with a passion for
          creating innovative and efficient solutions. With a strong background
          in full-stack development, I specialize in building scalable web
          applications using modern technologies. I am dedicated to continuous
          learning and thrive in collaborative environments where I can
          contribute my skills to create impactful projects.
        </p>
      </main>
    </div>
  );
};

export default App;
