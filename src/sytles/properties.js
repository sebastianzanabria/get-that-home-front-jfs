import styled from "@emotion/styled";

export const Properties = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PropertyContainer = styled.article`
  border-bottom: 4px solid #4fd1c5;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const HeartContainer = styled(Button)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

export const BasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const Address = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const OtherOptions = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  margin-bottom: 15px;
  li {
    margin-right: 1rem;
    display: inline-flex;
    align-items: center;
    svg {
      margin-right: 3px;
    }
  }
`;

// filter conditions

export const FilterContainer = styled.div`
  background: #ffffff;
  position: absolute;
  top: 37px;
  z-index: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

export const FormFilter = styled.div`
  margin: 0 !important;
  width: 250px;
  * {
    margin-right: 0 !important;
  }
`;

export const OptionsFilterContainer = styled.div`
  padding: 10px;
  margin: 0 !important;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0 !important;
  input {
    width: 100px;
  }
`;

export const ButtonContainer = styled.div`
  background-color: #4fd1c5;
  padding: 5px;
  width: 100%;
  margin-bottom: 0 !important;
  text-align: right;
`;

export const BedBathOptions = styled.div`
  margin-top: 10px;
  display: flex;
  button:last-child {
    border: 1px solid #4fd1c5;
  }
`;
