import styled from 'styled-components';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

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

export const DatepickerTitle = styled.span`
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.petite};
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const DatepickerWrapper = styled(DatePicker)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
  box-shadow: none;
  border-radius: 0px;

  input {
    color: ${({ theme }) => theme.colors.quaternary};
  }

  svg {
    & path {
      fill: ${({ theme }) => theme.colors.quaternary};
    }
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
  }

  ${({ adaptiveStretch }) =>
    adaptiveStretch &&
    `
    @media screen and (max-width: 815px) {
    justify-content: space-between;
    padding: 0 15px;
  }
  `};
`;
