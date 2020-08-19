import styled from "@emotion/styled";

export const MainApp = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 992px) {
    width: 85%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  padding: 8px 20px 8px 40px;
`;

export const ButtonAlt = styled(Button)`
  border: 1px solid #4fd1c5;
  color: #4fd1c5 !important;
  background-color: #fff;
  &:hover {
    background-color: #4fd1c5;
    color: #fff !important;
  }
`;
export const ButtonPrimary = styled(Button)`
  border: 1px solid #4fd1c5;
  color: #fff !important;
  background-color: #4fd1c5;
  &:hover {
    background-color: #3a9e94;
    border: 1px solid #3a9e94;
  }
`;

export const LoadingEffect = styled.div`
  width: 40px;
  left: 50%;
  transform: translateY(-50%);
  display: inline-block;
  position: relative;
  height: 40px;

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #1abc9c;
    animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .first {
    left: 8px;
    animation-delay: -0.24s;
  }
  .second {
    left: 32px;
    animation-delay: -0.12s;
  }
  .third {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes loading {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  align-items: center;
  div:first-of-type {
    > * {
      margin-right: 1rem;
    }
  }
`;
