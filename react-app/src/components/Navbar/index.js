import { Link } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton';
import SearchBar from "./SearchBar";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import './Navbar.css'
import './Categories.css'


const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <h1 id="catsy">Catsy</h1>
        </div>
        <SearchBar />
        <div className="nav-rightside">
          <LoginFormModal className="nav-button" />
          <SignupFormModal className="nav-button" />
          <button className="closed-box-icon">
            <i class="fas fa-box"></i>
          </button>
        </div>
      </nav>
      <nav className="nav-categories">
        <li class="has-submenu">
          {/* TODO: For Link path: change path to display all cats within that category */}
          <Link to="#">Age</Link>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <Link to="#">Gender</Link>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <Link to="#">Size</Link>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <Link to="#">Coat</Link>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <Link to="#">Breeds</Link>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
      </nav>
    </>
  )
};

export default Navbar