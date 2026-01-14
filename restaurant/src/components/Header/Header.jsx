import "./Header.css";
import logo from "../../assets/images/Logo.png";
import search from "../../assets/icons/Search.png";

function Header() {
  return (
    <header className="header">
      <div className="navcontainer">
        <img src={logo} className="logo" />

        <nav className="nav">
          <ul className="navlist">
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Promo</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <img src={search} className="search" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
