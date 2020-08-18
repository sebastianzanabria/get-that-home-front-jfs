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
} from "../../sytles/footer";

const Footer = () => {
  return (
    <FooterContainer>
      <ListLinks>
        <ListInfo>
          <li>
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link>
              <EmailIcon />
              info@getthathome.com
            </Link>
          </li>
          <li>
            <Link>
              <PhoneIcon width="17" />
              +51 988 345 542
            </Link>
          </li>
          <li>
            <MenuSocial>
              <li>
                <Link>
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link>
                  <InstagramIcon />
                </Link>
              </li>
              <li>
                <Link>
                  <TwitterIcon />
                </Link>
              </li>
            </MenuSocial>
          </li>
        </ListInfo>
        <OtherInfo>
          <TitleMenuItem>Company</TitleMenuItem>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>Legal</Link>
          </li>
        </OtherInfo>
        <OtherInfo>
          <TitleMenuItem>Home seekers</TitleMenuItem>
          <li>
            <Link>Rent Aparments</Link>
          </li>
          <li>
            <Link>Rent Houses</Link>
          </li>
          <li>
            <Link>Buy Apartments</Link>
          </li>
          <li>
            <Link>Buy Houses</Link>
          </li>
        </OtherInfo>
        <OtherInfo>
          <TitleMenuItem>Landlords</TitleMenuItem>
          <li>
            <Link>How it works</Link>
          </li>
          <li>
            <Link>Publish property</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </OtherInfo>
      </ListLinks>
      <hr />
      <div style={{ textAlign: "center" }}>
        Build by @fredd, @sebas and @jorge
      </div>
    </FooterContainer>
  );
};

export default Footer;
