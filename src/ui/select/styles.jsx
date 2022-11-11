import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;

  ${({ adaptiveStretch }) =>
    adaptiveStretch &&
    `
    @media screen and (max-width: 815px) {
    width: 60%;
  }
  `}
`;

export const SelectTitle = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.petite};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const SelectWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export const SelectContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const ArrowDownIcon = styled(IoIosArrowDown).attrs(({ theme }) => ({
  stroke: theme.colors.quaternary,
  fill: theme.colors.quaternary,
}))`
  transform: scale(1.3)
    ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;

export const SelectContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  height: 50px;
`;

export const SelectDropdownWrapper = styled.div`
  -webkit-appearance: none;

  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  width: 100%;
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  margin-top: 5px;
  z-index: 2;
`;

export const DropdownItem = styled.span`
  width: 80%;
  padding: ${({ open }) => (open ? '15px 0px' : '0px 15px')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  font-size: ${({ theme, open }) => (open ? theme.fontSize.tiny : '0px')};
  color: ${({ theme }) => theme.colors.quaternary};
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.quaternary};
  }

  ${({ adaptiveStretch }) =>
    adaptiveStretch &&
    `
    @media screen and (max-width: 815px) {
    width: 90%;
  }
  `}
`;
