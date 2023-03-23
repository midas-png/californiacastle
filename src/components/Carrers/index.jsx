import {
  ComponentWrapper,
  ImageWrapper,
  ImageHeader,
  CarrersWrapper,
  CarrersContentWrapper,
  TitleComponent,
  ArticleWrapper,
  ArticleDescription,
  ArticleInfoWrapper,
} from './styles';
import { Title, Button } from 'ui';

export const Carrers = () => {
  return (
    <ComponentWrapper>
      <ImageWrapper>
        <ImageHeader />
      </ImageWrapper>
      <CarrersWrapper>
        <CarrersContentWrapper>
          <TitleComponent secondaryFont>Carrers</TitleComponent>
          <ArticleWrapper>
            <Title>Lorem Ipsum</Title>
            <ArticleInfoWrapper>
              <ArticleDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ArticleDescription>
            </ArticleInfoWrapper>
          </ArticleWrapper>
          <ArticleWrapper>
            <Title>Lorem Ipsum</Title>
            <ArticleDescription>
              <ArticleDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ArticleDescription>
            </ArticleDescription>
          </ArticleWrapper>
          <Button>Apply Now</Button>
        </CarrersContentWrapper>
      </CarrersWrapper>
    </ComponentWrapper>
  );
};
