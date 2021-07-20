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
          <h1>Catsy</h1>
        </div>
        <SearchBar />
        <div className="nav-rightside">
          <LoginFormModal className="nav-button"/>
          <SignupFormModal className="nav-button"/>
        </div>
      </nav>
      <div>
        
      </div>
    </>
  )
};

export default Navbar