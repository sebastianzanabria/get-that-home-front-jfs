import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
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

export const ClonContainer = styled.div`
  position: fixed;
  background-color: #f7fbfd;
  right: -100%;
  width: 100%;
  top: 0;
  padding: 3rem;
  z-index: 2;
  transition: all 0.3s ease;
`;

export const MenuClon = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    padding-bottom: 3rem;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Button = styled.button`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
`;
