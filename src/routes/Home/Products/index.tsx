import { NavLink, Outlet } from "react-router-dom";
import { getProducts } from "../../../data";

export default function Products() {
  const products = getProducts();

  return (
    <section>
      <div className="container">
        <nav className="sub-navbar">
          {products.map((product) => (
            <NavLink to={`/products/${product.name}`} key={product.name} className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
              {product.name}
           </NavLink>
          ))}
        </nav>
        <Outlet/>
      </div>
    </section>
  );
}
