import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-32 px-6 max-w-6xl mx-auto text-white">
        <h1 className="text-6xl font-bold mb-4">Software Developer.</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Merhaba, ben Ceyda. 2026 standartlarında modern web deneyimleri inşa
          ediyorum.
        </p>
      </main>
    </div>
  );
};

export default App;
