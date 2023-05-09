import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
    <Register />
    <Login />
    <Home />
    <ProductList />
    <Product />
    <Cart />
    </>
  )
};

export default App;
