import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

import LogoutButton from "../LogoutButton";
import Button from "../../Button";
import { logout } from '../../../store/session';

import styles from './Profile.module.css';

const ProfileButton = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const goToAdopted = () => {
    if (user) {
      history.push('/adopted')
    }
  };

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);

    if (!showMenu) return;


    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <div className={styles.profileContainer}>
      {/* <button className="closed-box-icon" onClick={openMenu}>
        <i className="fas fa-user" />
        <i className="fas fa-caret-down"></i>
      </button> */}
      <Button text={<i class="fas fa-user"></i>} action={openMenu} color={"#f3aa77"} width={10}/>
      {showMenu &&
      (
        <div className={styles.profileDropdown}>
            <div className={styles.dropdownText}>{user.username}</div>
            <div className={styles.dropdownText}>{user.email}</div>
            <div className={styles.listItems}>
              <Button text={"My Cats"} action={goToAdopted} color={""} width={100}/>
            </div>
            <div className={styles.listItems}>
              <Button text={"Logout"} action={onLogout} color={"lightslategrey"} width={100}/>
            </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
