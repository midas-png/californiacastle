import { ComponentWrapper, DatepickerTitle, DatepickerWrapper } from './styles';

export const Datepicker = ({ title, adaptiveStretch }) => (
  <ComponentWrapper adaptiveStretch={adaptiveStretch}>
    {title && <DatepickerTitle>{title}</DatepickerTitle>}
    <DatepickerWrapper adaptiveStretch={adaptiveStretch} />
  </ComponentWrapper>
);
