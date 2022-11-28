import { useSessionStorage } from 'domain';
import { useForm } from 'react-hook-form';
import { BookerWrapper, LinkScroll as Link } from './styles';
import { Button, Datepicker, Select } from 'ui';
import { BOOKER_ITEMS } from 'data';

export const Booker = () => {
  const [sessionCheckIn] = useSessionStorage(
    'check_in',
    new Date().toISOString().slice(0, 10),
  );
  const [sessionCheckOut] = useSessionStorage('check_out', '1 Month');
  const [sessionLocation] = useSessionStorage('location', 'Los Angeles');
  const [sessionRoom] = useSessionStorage('room', 'For 4 persons');
  const [sessionProgram] = useSessionStorage('program', 'Program 1');
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      check_in: sessionCheckIn,
      check_out: sessionCheckOut,
      location: sessionLocation,
      room: sessionRoom,
      program: sessionProgram,
    },
  });

  const handleBookingData = () => {
    const values = getValues();
    Object.keys(values).forEach((key) => {
      sessionStorage.setItem(key, values[key]);
    });
  };

  return (
    <BookerWrapper id='booker'>
      {BOOKER_ITEMS.map(({ title, name, options, type }, index) => {
        if (type === 'select')
          return (
            <Select
              key={index}
              title={title}
              options={options}
              adaptiveStretch={true}
              onChange={(option) => setValue(name || title, option)}
            />
          );
        else
          return (
            <Datepicker
              key={index}
              title={title}
              defaultValue={getValues(name)}
              minDate={getValues(name)}
              adaptiveStretch={true}
              onChange={(date) => setValue(name, date)}
            />
          );
      })}
      <Link
        to='location1'
        spy={true}
        smooth={true}
        offset={-80}
        duration={1000}>
        <Button
          adaptiveStretch={true}
          onClick={handleSubmit(handleBookingData)}>
          Book
        </Button>
      </Link>
    </BookerWrapper>
  );
};
