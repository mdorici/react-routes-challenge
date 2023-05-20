import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/Home/About";
import HomeBody from "./routes/Home/HomeBody";
import Products from "./routes/Home/Products";
import Product from "./routes/Home/Products/Product";
import NotFound from "./routes/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />} >
            <Route path=":name" element={<Product />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
