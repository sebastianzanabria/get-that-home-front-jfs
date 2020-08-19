import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { ReactComponent as EmailIcon } from "../../images/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../../images/icons/phone.svg";
import { ReactComponent as FacebookIcon } from "../../images/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../images/icons/twitter.svg";
import {
  MenuSocial,
  FooterContainer,
  ListLinks,
  ListInfo,
  OtherInfo,
  TitleMenuItem,
  ItemLogo,
  Authors,
} from "../../sytles/footer";
import { Container } from "../../sytles/general";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <ListLinks>
          <ListInfo>
            <ItemLogo>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </ItemLogo>
            <li>
              <a
                href="mailto:info@getthathome.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon />
                info@getthathome.com
              </a>
            </li>
            <li>
              <a
                href="telto:988345542"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneIcon width="17" />
                +51 988 345 542
              </a>
            </li>
            <li>
              <MenuSocial>
                <li>
                  <a href="www.facebook.com" target="_blank">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="www.instagram.com" target="_blank">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="www.twitter.com" target="_blank">
                    <TwitterIcon />
                  </a>
                </li>
              </MenuSocial>
            </li>
          </ListInfo>
          <OtherInfo>
            <TitleMenuItem>Company</TitleMenuItem>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/legal">Legal</Link>
            </li>
          </OtherInfo>
          <OtherInfo>
            <TitleMenuItem>Home seekers</TitleMenuItem>
            <li>
              <Link to="/apartments">Rent Aparments</Link>
            </li>
            <li>
              <Link to="/houses">Rent Houses</Link>
            </li>
            <li>
              <Link to="/apartments">Buy Apartments</Link>
            </li>
            <li>
              <Link to="/houses">Buy Houses</Link>
            </li>
          </OtherInfo>
          <OtherInfo>
            <TitleMenuItem>Landlords</TitleMenuItem>
            <li>
              <Link to="/works">How it works</Link>
            </li>
            <li>
              <Link to="/new-property">Publish property</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </OtherInfo>
        </ListLinks>
      </Container>
      <hr />
      <div style={{ textAlign: "center" }}>
        <Authors>
          Build by{" "}
          <a
            href="https://github.com/fmunives"
            target="_blank"
            rel="noopener noreferrer"
          >
            @fredd
          </a>
          ,{" "}
          <a
            href="https://github.com/seussz"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sebas
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/seussz"
            target="_blank"
            rel="noopener noreferrer"
          >
            @jorge
          </a>
        </Authors>
      </div>
    </FooterContainer>
  );
};

export default Footer;
