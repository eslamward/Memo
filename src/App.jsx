import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark ">
      <Header />
      <Slider />
      <ProductGrid />
    </div>
  );
}

export default App;
