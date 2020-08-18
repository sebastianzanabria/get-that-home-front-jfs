import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #f7fbfd;
  margin-top: 30px;
  ul {
    list-style: none;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
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
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  a {
    color: #4a5568;
  }
`;

export const ListInfo = styled.ul`
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  flex-grow: 2;
  svg {
    margin-right: 5px;
  }
  li {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  @media (min-width: 768px) {
    font-size: 14px;
    width: auto;
  }
`;

export const OtherInfo = styled.ul`
  flex-grow: 1;
`;

export const MenuSocial = styled.ul`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: left;
  }
`;

export const TitleMenuItem = styled.li`
  font-size: 20px;
  color: #4fd1c5;
`;

export const ItemLogo = styled.li`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Authors = styled.p`
  color: #4a5568;
  a {
    color: #4a5568;
  }
`;
