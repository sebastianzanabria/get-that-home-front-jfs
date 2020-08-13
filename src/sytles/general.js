import styled from "@emotion/styled";

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
