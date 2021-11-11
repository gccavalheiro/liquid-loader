import styled, { css } from "styled-components";

interface ISpinnerItemProps {
  multiplierSpinners?: number;
  multiplierLiquidSpinners?: number;
  rotate?: boolean;
}

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  filter: url("#goo");
  animation: animate 16s ease-in-out infinite;
`;

export const SpinnerItem = styled.span<ISpinnerItemProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.multiplierSpinners &&
    css`
      transform: rotate(calc(45deg * ${props.multiplierSpinners}));
    `}

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #ca77ee, #b43de7);
    box-shadow: 0 0 30px #b43de7;
    border-radius: 50%;
  }

  @keyframes animate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${(props) =>
    props.rotate &&
    css`
      animation: animate 4s ease-in-out infinite;
      animation-delay: calc(-0.2s * ${props.multiplierLiquidSpinners});
    `}
`;

export const Svg = styled.svg`
  width: 0;
  height: 0;
`;
