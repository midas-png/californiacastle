import {
  SidebarWrapper,
  SidebarCancel,
  NavigationWrapper,
  LinksWrapper,
  LinkWrapper as Link,
} from './styles';
import { Title, Button } from 'ui';

const LINKS_ITEMS = [
  {
    label: 'Locations',
    linkTo: '/locations ',
  },
  {
    label: 'Assistance',
    linkTo: '/assistance',
  },
  {
    label: 'Contacts',
    linkTo: '/contacts',
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
              <Link to={linkTo} key={index} onClick={() => setIsActive(false)}>
                <Title>{label}</Title>
              </Link>
            ))}
          </LinksWrapper>
        </NavigationWrapper>
        <Button>Book now</Button>
      </SidebarWrapper>
    </>
  );
};
