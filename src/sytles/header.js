import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.ul`
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
`;
