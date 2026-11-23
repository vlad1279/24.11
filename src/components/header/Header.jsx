import "./header.css";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <nav>
        <NavLink className="nav-link" to="/"> Home</NavLink>
        <NavLink className="nav-link" to="/about"> About</NavLink>
        <NavLink className="nav-link" to="/products"> Products</NavLink>
      </nav>
    </header>
  );
}
