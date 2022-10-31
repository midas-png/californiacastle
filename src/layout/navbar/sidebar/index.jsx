import { useOutsideClick } from 'domain';
import { useRef } from 'react';
import {
  SidebarWrapper,
  NavigationWrapper,
  LinksWrapper,
  LinkWrapper as Link,
} from './styles';
import { Title } from 'ui';

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
  const selectRef = useRef(null);

  useOutsideClick(selectRef, () => setIsActive(false));
  return (
    <>
      <SidebarWrapper $isActive={isActive} ref={selectRef}>
        <NavigationWrapper>
          <LinksWrapper>
            {LINKS_ITEMS.map((link, index) => (
              <Link
                to={link.linkTo}
                key={index}
                onClick={() => setIsActive(false)}>
                <Title>{link.label}</Title>
              </Link>
            ))}
          </LinksWrapper>
        </NavigationWrapper>
        <div></div>
      </SidebarWrapper>
    </>
  );
};
