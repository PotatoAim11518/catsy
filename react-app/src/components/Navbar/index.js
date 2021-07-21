import { NavLink } from "react-router-dom"
import LogoutButton from '../auth/LogoutButton';
import SearchBar from "./SearchBar";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import './Navbar.css'


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
        <li class="has-submenu">Coats</li>
        <li class="has-submenu">Breeds</li>
        <li class="has-submenu">Sizes</li>
        <li class="has-submenu">Ages</li>
        <li class="has-submenu">Genders</li>
      </nav>
    </>
  )
};

export default Navbar