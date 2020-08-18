import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  ul {
    list-style: none;
    padding-left: 0;
    padding-right: 1rem;
  }
  ul:last-child {
    padding-right: 0;
  }
  li {
    padding-bottom: 10px;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ListLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    color: #4a5568;
  }
`;

export const ListInfo = styled.ul`
  font-size: 14px;
  flex-grow: 2;
  svg {
    margin-right: 5px;
  }
`;

export const OtherInfo = styled.ul`
  flex-grow: 1;
`;

export const MenuSocial = styled.ul`
  display: flex;
`;

export const TitleMenuItem = styled.li`
  font-size: 20px;
  color: #4fd1c5;
`;
