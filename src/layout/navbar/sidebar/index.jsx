import { Link } from 'react-router-dom';
import {
  SidebarWrapper,
  SidebarCancel,
  NavigationWrapper,
  LinksWrapper,
  LinkWrapper,
} from './styles';
import { Title, Button } from 'ui';

const LINKS_ITEMS = [
  {
    label: 'Home',
    linkTo: '/californiacastle',
  },
  {
    label: 'About us',
    linkTo: '/about',
  },
];

export const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <SidebarWrapper $isActive={isActive}>
        <SidebarCancel onClick={() => setIsActive(false)} />
        <NavigationWrapper>
          <LinksWrapper>
            {LINKS_ITEMS.map(({ linkTo, label }, index) => (
              <LinkWrapper
                to={linkTo}
                key={index}
                onClick={() => setIsActive(false)}>
                <Title>{label}</Title>
              </LinkWrapper>
            ))}
          </LinksWrapper>
        </NavigationWrapper>
        <Link to='/booking'>
          <Button>Book</Button>
        </Link>
      </SidebarWrapper>
    </>
  );
};
