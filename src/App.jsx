import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/api/store";
import RequireAuth from "./components/RequireAuth";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Login from "./pages/Login";
function App() {
  console.log("test perfomance");
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="" element={<RequireAuth />}>
              <Route path="product-details" element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>

    // <div className="bg-background-light dark:bg-background-dark ">
    //   <Header />
    //   <Slider />
    //   <ProductGrid />
    // </div>
  );
}

export default App;
