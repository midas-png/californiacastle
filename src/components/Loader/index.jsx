import { LoaderWrapper, LoadingBall } from './styles';

export const Loader = () => (
  <LoaderWrapper>
    <LoadingBall duration={0.1} />
    <LoadingBall duration={0.2} />
    <LoadingBall duration={0.3} />
  </LoaderWrapper>
);
