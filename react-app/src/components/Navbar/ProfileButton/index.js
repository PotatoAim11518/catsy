import { useState, useEffect } from "react";
import LogoutButton from "../LogoutButton";
// import './ProfileButton.css';

const ProfileButton = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    const closeMenu = () => setShowMenu(false);

    if (!showMenu) return;


    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <button className="closed-box-icon" onClick={openMenu}>
        <i className="fas fa-user" />
        <i class="fas fa-caret-down"></i>
      </button>
      {showMenu && 
      (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;