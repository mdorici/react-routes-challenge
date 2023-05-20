import { Link, NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
            Início
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
            Produtos
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
            Sobre nós
          </NavLink>
        </nav>        
      </div>
      <Link to="/home" className="home-image"> <img src="src\assets\home.png" alt="home" /></Link>
    </header>
  );
}
