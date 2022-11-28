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
      onChange(new Date(date).toISOString().slice(0, 10));
    }
  };

  return (
    <ComponentWrapper size={size} adaptiveStretch={adaptiveStretch}>
      {title && <DatepickerTitle>{`${title}:`}</DatepickerTitle>}
      <DatepickerWrapper
        adaptiveStretch={adaptiveStretch}
        defaultValue={moment(defaultValue, dateFormat)}
        disabledDate={(date) => !date || date.isBefore(minDate)}
        onChange={(date) => handleDateChange(date)}
      />
    </ComponentWrapper>
  );
};
