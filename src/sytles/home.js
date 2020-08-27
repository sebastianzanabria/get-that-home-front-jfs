import styled from "@emotion/styled";

export const MeetContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 992px) {
    width: 90%;
  }
`;

export const CreateAccountContainer = styled.div`
  background-color: #f7fbfd;
  text-align: center;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  margin-top: 100px;
`;

export const ForSaleContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  div:first-of-type {
    justify-self: center;
    @media (min-width: 768px) {
      justify-self: left;
    }
    img {
      width: 100%;
      @media (min-width: 768px) {
        width: auto;
      }
    }
  }
  div:last-child {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
`;

// preview properties

export const PreviewTextContainer = styled.div`
  text-align: center;
  margin-top: 190px;
`;

export const ContentText = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  color: #8a8a97;
  position: relative;
  &:after {
    position: absolute;
    bottom: -16px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 30px;
    height: 5px;
    background: #ffc252;
  }
`;

export const FilterItem = styled.div`
  position: relative;
  flex-grow: 1;
  button {
    width: 100%;
  }
`;
