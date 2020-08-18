import React from "react";
import { Link } from "react-router-dom";
import {
  MenuContainer,
  HeaderContainer,
  HamburgerContainer,
  MenuClon,
  ClonContainer,
  Button,
} from "../../sytles/header";
import logo from "../../images/logo.png";
import { ButtonAlt, ButtonPrimary } from "../../sytles/general";

function Header() {
  function showMenuClon() {
    const menu = document.getElementById("menu-clon");
    menu.style.right = "0";
  }

  function closeMenuClon(event) {
    const menu = document.getElementById("menu-clon");
    menu.style.right = "-100%";
  }

  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <HamburgerContainer>
          <Button onClick={showMenuClon}>
            <i
              style={{ fontSize: "25px", color: "#4fd1c5" }}
              className="fas fa-bars"
            ></i>
          </Button>
        </HamburgerContainer>
        <ClonContainer id="menu-clon" onClick={closeMenuClon}>
          <div style={{ marginBottom: "3rem" }}>
            <Button>
              <i
                style={{ fontSize: "30px", color: "#4fd1c5" }}
                className="far fa-window-close"
              ></i>
            </Button>
          </div>
          <MenuClon>
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
          </MenuClon>
        </ClonContainer>
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
