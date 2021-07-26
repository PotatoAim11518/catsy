import { Link, Redirect, useHistory } from "react-router-dom"
import SearchBar from "./SearchBar";
import LoginFormModal from "./LoginFormModal";
import SignupFormModal from "./SignupFormModal";
import ProfileButton from "./ProfileButton";
import './Navbar.css'
import './Categories.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAges, getSizes, getCoats, getBreeds, getGenders } from '../../store/categories';
import Button from "../Button";
// import logo from '../../../public/assets/catsy_logo.png'


const Navbar = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [dropDownMenuContent, setDropMenuContent] = useState([]);
  //Allows access to the store to grab the state
  const user = useSelector(state => state.session.user);
  const categories = useSelector(state => state.categories);
  const history = useHistory();

  const goToCart = () => {
    if (user) {
      history.push('/cart');
    }
    history.push('/cart');
  }

  useEffect(() => {
    dispatch(getAges());
    dispatch(getSizes());
    dispatch(getCoats());
    dispatch(getBreeds());
    dispatch(getGenders());
  }, [dispatch])

  let userRender;
  if (user) {
    userRender = (
      <>
        <ProfileButton user={user} />
        <button className="closed-box-icon">
          <i onClick={goToCart} class="fas fa-box-open"></i>
        </button>
      </>
    )
  } else {
    userRender = (
      <>
        <LoginFormModal className="nav-button" />
        <SignupFormModal className="nav-button" />
        <button className="closed-box-icon">
          <i onClick={goToCart} class="fas fa-box"></i>
        </button>
      </>
    )
  };


  const showAgesDropDown = () => {
    setDropMenuContent(categories.ages)
  };

  const showGendersDropDown = () => {
    setDropMenuContent(categories.genders)
  };

  const showSizesDropDown = () => {
    setDropMenuContent(categories.sizes)
  };

  const showBreedsDropDown = () => {
    setDropMenuContent(categories.breeds)
  };


  const showCoatsDropDown = () => {
    setDropMenuContent(categories.coats)
  };

  const handleMouseLeave = () => {
    setDropMenuContent([]);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img className="logo-pic" src="/assets/catsy_logo.png" alt="catsy-logo"></img>
          </Link>
        </div>
        <SearchBar />
        <div className="nav-rightside">
          {userRender}
        </div>
      </nav>
      <nav className="nav-categories">
        {/* TODO: For Link path: change path to display all cats within that category */}
        <div className="category" onMouseEnter={showAgesDropDown}>
          <Link to="#">Age</Link>
          <i class="fas fa-sort-down"></i>
        </div>
        <div className="category" onMouseEnter={showGendersDropDown}>
          <Link to="#">Gender</Link>
          <i class="fas fa-sort-down"></i>
        </div>
        <div className="category" onMouseEnter={showSizesDropDown}>
          <Link to="#">Size</Link>
          <i class="fas fa-sort-down"></i>
        </div>
        <div className="category" onMouseEnter={showCoatsDropDown}>
          <Link to="#">Coats</Link>
          <i class="fas fa-sort-down"></i>
        </div>
        <div className="category" onMouseEnter={showBreedsDropDown}>
          <Link to="#">Breeds</Link>
          <i class="fas fa-sort-down"></i>
        </div>
      </nav>
      {/* {showMenu && showAgesDropDown()} */}
      <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          {dropDownMenuContent?.map(category => (
            <Link to={`/search/${category.toLowerCase()}`} key={category}>{category}</Link>
          ))}
      </div>
      {/* {showMenu && (
      categories.ages.map(age => (
        <div onMouseLeave={null}>{age}</div>
      ))
      )} */}
    </>
  )
};

export default Navbar
