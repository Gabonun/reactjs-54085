import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
          <img className="icon-navbar" src="/img/logo_compu.png" />
        </Link>
        
        <ul className="categories-navbar">
          <Link to="/category/case" className="categorie-navbar">
            Gabinetes
          </Link>
          <Link to="/category/video" className="categorie-navbar">
            Video
          </Link>
          <Link to="/category/mobo" className="categorie-navbar">
            Placas Madre
          </Link>
          <Link to="/category/memos" className="categorie-navbar">
            Memorias
          </Link>
          <Link to="/category/monitor" className="categorie-navbar">
            Monitores
          </Link>
        </ul>
        <CartWidget />
        <div className="NumProducto">0</div>
    </nav>
  );
};
export default NavBar;
