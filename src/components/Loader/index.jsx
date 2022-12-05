import { LoaderWrapper, LoadingBall, ErrorMessage } from './styles';

export const Loader = ({ error }) => (
  <LoaderWrapper>
    <LoadingBall duration={0.1} />
    <LoadingBall duration={0.2} />
    <LoadingBall duration={0.3} />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </LoaderWrapper>
);
