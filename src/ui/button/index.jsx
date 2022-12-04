import { Spin } from 'antd';
import { ButtonComponent, LoaderIcon } from './styles';

export const Button = ({ children, loading, ...props }) => {
  return (
    <ButtonComponent {...props} loading={loading} disabled={loading}>
      {loading ? <Spin indicator={<LoaderIcon spin />} /> : children}
    </ButtonComponent>
  );
};
