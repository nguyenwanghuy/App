import React, { useContext } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../components/HeaderComponent.js';
import AuthModal from '../components/Modal.js';
import AuthenContext from '../context/AuthenContext/AuthenContext.js';

const Header = () => {
  const {
    handleLogOut,
    auth: { isAuthenticated },
  } = useContext(AuthenContext);
  const onHandleLogout = () => {
    localStorage.removeItem('accessToken');
    handleLogOut();
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>LEARN</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/hoi-gia-su' activeStyle>
            Hỏi gia sư
          </NavLink>

          <NavLink to='/chuyen-de' activeStyle>
            Chuyên đề
          </NavLink>
        </NavMenu>
        {!isAuthenticated && (
          <NavBtn>
            <AuthModal />
          </NavBtn>
        )}

        {isAuthenticated && <NavBtn onClick={onHandleLogout}>Đăng xuất</NavBtn>}
      </Nav>
    </>
  );
};

export default Header;
