import CartWidget from "./CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="icon-navbar" src="/img/logo_dp.png" alt="logo de nuestro ecomerce" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Música
            </a>
            <a className="nav-link" href="#">
              Ropa
            </a>
            <a className="nav-link" href="#">
              Accesorios
            </a>
          </div>
        </div>
        <CartWidget />
        <div className="NumProducto">0</div>
      </div>
    </nav>
  )
}
export default NavBar
