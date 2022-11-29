import { useSessionStorage } from 'domain';
import { useForm } from 'react-hook-form';
import { BookerWrapper, LinkScroll as Link } from './styles';
import { Button, Datepicker, Select, Textfield } from 'ui';
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
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      check_in: sessionCheckIn,
      check_out: sessionCheckOut,
      location: sessionLocation,
      room: sessionRoom,
      program: sessionProgram,
    },
  });

  const handleBookingData = (data) => {
    Object.keys(data).forEach((key) => {
      sessionStorage.setItem(key, data[key]);
    });
  };

  return (
    <BookerWrapper id='booker'>
      {BOOKER_ITEMS.map(
        ({ title, name, options, textfieldType, type, placeholder }, index) => {
          if (type === 'select')
            return (
              <Select
                key={index}
                title={title}
                options={options}
                defaultOption={sessionStorage.getItem(name || title)}
                adaptiveStretch={true}
                onChange={(option) => setValue(name || title, option)}
              />
            );
          else if (type === 'textfield')
            return (
              <Textfield
                key={index}
                type={textfieldType}
                title={title}
                name={name}
                adaptiveStretch={true}
                defaultValue={sessionStorage.getItem(name)}
                placeholder={placeholder}
                {...register(name)}
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
        },
      )}
      <Link
        to='location1'
        spy={true}
        smooth={true}
        offset={-80}
        duration={1000}>
        <Button
          adaptiveStretch={true}
          onClick={handleSubmit((data) => handleBookingData(data))}>
          Save
        </Button>
      </Link>
    </BookerWrapper>
  );
};
