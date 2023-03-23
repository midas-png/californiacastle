import {
  ComponentWrapper,
  ImageWrapper,
  ImageHeader,
  PrivacyWrapper,
  PrivacyContentWrapper,
  TitleComponent,
  ArticleWrapper,
  ArticleDescription,
} from './styles';
import { Title } from 'ui';

export const Policy = () => {
  return (
    <ComponentWrapper>
      <ImageWrapper>
        <ImageHeader />
      </ImageWrapper>
      <PrivacyWrapper>
        <PrivacyContentWrapper>
          <TitleComponent secondaryFont>Privacy Policy</TitleComponent>
          <ArticleWrapper>
            <Title>Lorem Ipsum</Title>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ArticleDescription>
          </ArticleWrapper>
          <ArticleWrapper>
            <Title>Lorem Ipsum</Title>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ArticleDescription>
          </ArticleWrapper>
          <ArticleWrapper>
            <Title>Lorem Ipsum</Title>
            <ArticleDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ArticleDescription>
          </ArticleWrapper>
        </PrivacyContentWrapper>
      </PrivacyWrapper>
    </ComponentWrapper>
  );
};
