import React from "react";
import { Link } from "react-router-dom";
import { MenuContainer, HeaderContainer } from "../../sytles/header";
import logo from "../../images/logo.png";
import { ButtonAlt, ButtonPrimary } from "../../sytles/general";

function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <MenuContainer>
          <li>
            <Link to="/">Find Houses</Link>
          </li>
          <li>
            <Link to="/">Find Apartments</Link>
          </li>
          <li>
            <ButtonAlt as={Link} to="/sign-up">
              Join
            </ButtonAlt>
          </li>
          <li>
            <ButtonPrimary as={Link} to="/login">
              Login
            </ButtonPrimary>
          </li>
        </MenuContainer>
      </div>
    </HeaderContainer>
  );
}

export default Header;
