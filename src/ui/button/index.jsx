import { ButtonComponent } from './styles';

export const Button = ({ children, loading, ...props }) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
