import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.ul`
  display: none;
  @media (min-width: 992px) {
    padding-left: 0;
    list-style: none;
    display: flex;
    li {
      margin-right: 1rem;
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

export const HamburgerContainer = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;
