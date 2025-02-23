import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="header">
        <h2>Rugcosta</h2>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Sobre">Sobre</Link>
          <Link to="/Contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
