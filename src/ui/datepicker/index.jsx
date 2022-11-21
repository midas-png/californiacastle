import moment from 'moment';
import { ComponentWrapper, DatepickerTitle, DatepickerWrapper } from './styles';

const dateFormat = 'YYYY/MM/DD';

export const Datepicker = ({
  title,
  adaptiveStretch,
  size,
  defaultValue,
  minDate,
  onChange,
}) => {
  const handleDateChange = (date) => {
    if (onChange instanceof Function) {
      onChange(new Date().toISOString().slice(0, 10));
    }
  };

  return (
    <ComponentWrapper size={size} adaptiveStretch={adaptiveStretch}>
      {title && <DatepickerTitle>{`${title}:`}</DatepickerTitle>}
      <DatepickerWrapper
        adaptiveStretch={adaptiveStretch}
        defaultValue={defaultValue ? moment(defaultValue, dateFormat) : null}
        disabledDate={(date) => !date || date.isBefore(minDate)}
        onChange={(date) => handleDateChange(date)}
      />
    </ComponentWrapper>
  );
};
