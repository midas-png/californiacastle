import { SidebarWrapper } from './styles';

export const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <SidebarWrapper $isActive={isActive}>Пока не сделал P:</SidebarWrapper>
    </>
  );
};
