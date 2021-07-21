import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import ProfileButton from "./ProfileButton";
import './Navbar.css'
import './Categories.css'
import { useSelector } from "react-redux";


const Navbar = () => {
  //Allows access to the store to grab the state
  const user = useSelector(state => state.session.user)

  let userRender;
  if (user) {
    userRender = (
      <>
        <ProfileButton user={user}/>
        <button className="closed-box-icon">
          <i class="fas fa-box-open"></i>
        </button>
      </>
    )
  } else {
    userRender = (
      <>
        <LoginFormModal className="nav-button" />
        <SignupFormModal className="nav-button" />
        <button className="closed-box-icon">
          <i class="fas fa-box"></i>
        </button>
      </>
    )
  }
  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <h1 id="catsy">Catsy</h1>
        </div>
        <SearchBar />
        <div className="nav-rightside">
          {userRender}
        </div>
      </nav>
      <nav className="nav-categories">
        <li class="has-submenu">
          {/* TODO: For Link path: change path to display all cats within that category */}
          <div className="category">
            <Link to="#">Age</Link>
            <i class="fas fa-sort-down"></i>
          </div>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <div className="category">
            <Link to="#">Gender</Link>
            <i class="fas fa-sort-down"></i>
          </div>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <div className="category">
            <Link to="#">Size</Link>
            <i class="fas fa-sort-down"></i>
          </div>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <div className="category">
            <Link to="#">Coats</Link>
            <i class="fas fa-sort-down"></i>
          </div>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
        <li class="has-submenu">
          <div className="category">
            <Link to="#">Breeds</Link>
            <i class="fas fa-sort-down"></i>
          </div>
          <ul className="submenu">
            <li><Link className="subitem">Placeholder</Link></li>
          </ul>
        </li>
      </nav>
    </>
  )
};

export default Navbar