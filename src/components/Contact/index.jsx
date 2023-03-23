import {
  ComponentWrapper,
  ImageWrapper,
  ImageHeader,
  ContactWrapper,
  ContactContentWrapper,
  TitleComponent,
  ArticleWrapper,
  ArticleDescription,
} from './styles';
import { Title } from 'ui';

export const Contact = () => {
  return (
    <ComponentWrapper>
      <ImageWrapper>
        <ImageHeader />
      </ImageWrapper>
      <ContactWrapper>
        <ContactContentWrapper>
          <TitleComponent secondaryFont>Contact</TitleComponent>
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
        </ContactContentWrapper>
      </ContactWrapper>
    </ComponentWrapper>
  );
};
