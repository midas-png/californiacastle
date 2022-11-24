import styled from 'styled-components';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const InformationWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.quaternary};
`;

export const RightsWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 15px;
  }
`;

export const FooterLogo = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 60px;
`;

export const NavigationItem = styled.span`
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const RightsReserved = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const InformationUnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 220px;
`;

export const InformationUnits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InformationContent = styled.span`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InformationTime = styled.span`
  color: ${({ theme }) => theme.colors.quaternary};
`;

export const FacebookLogo = styled(FaFacebook)`
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  stroke-width: 10;
  fill: transparent;
  stroke: #fff;

  &:hover {
    fill: #4267b2;
    stroke: #4267b2;
  }
`;

export const YoutubeLogo = styled(FaYoutube)`
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  stroke-width: 10;
  fill: transparent;
  stroke: #fff;

  &:hover {
    fill: #f00;
    stroke: #f00;
  }
`;

export const LinkedinLogo = styled(FaLinkedin)`
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  stroke-width: 10;
  fill: transparent;
  stroke: #fff;

  &:hover {
    fill: #0e76a8;
    stroke: #0e76a8;
  }
`;

export const MailIcon = styled(AiOutlineMail)`
  transform: scale(1.3);
  stroke-width: 10;
  stroke: #fff;
  fill: #fff;
`;

export const PhoneIcon = styled(AiOutlinePhone)`
  transform: scale(1.3);
  stroke-width: 10;
  stroke: #fff;
  fill: #fff;
`;
