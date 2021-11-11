import * as S from "./styles";

interface ILoaderProps {
  multiplierSpinners: number;
  multiplierLiquidSpinners: number;
}

export const Loader: React.FC<ILoaderProps> = ({
  multiplierSpinners,
  multiplierLiquidSpinners,
}) => {
  const spinners = [];
  const liquidSpinners = [];

  for (let i = 1; i <= multiplierSpinners; i++) {
    spinners.push(<S.SpinnerItem multiplierSpinners={i} />);
  }

  for (let j = 1; j <= multiplierLiquidSpinners; j++) {
    liquidSpinners.push(<S.SpinnerItem rotate multiplierLiquidSpinners={j} />);
  }

  return (
    <S.Container>
      <S.Svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
          />
        </filter>
      </S.Svg>
      <S.Content>
        {spinners}
        {liquidSpinners}
      </S.Content>
    </S.Container>
  );
};
