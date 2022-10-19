import { forwardRef } from 'react';
import { TitleComponent } from './styles';

export const Title = forwardRef(
  ({ component, variant, children, ...restProps }, ref) => (
    <TitleComponent
      as={component ?? variant}
      ref={ref}
      variant={variant}
      {...restProps}>
      {children}
    </TitleComponent>
  ),
);
