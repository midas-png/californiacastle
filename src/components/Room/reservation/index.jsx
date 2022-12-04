import { useToggle, useSessionStorage } from 'domain';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ReservationWrapper,
  PriceWrapper,
  PriceTitle,
  Price,
  TitleComponent as Title,
} from './styles';
import { bookSchema } from './schema';
import { Button, Textfield, Select, Datepicker } from 'ui';
import { RESERVATION_ITEMS } from 'data';
import { Api } from 'services';

const { appointment } = new Api();

export const Reservation = ({ price }) => {
  const [sessionCheckIn] = useSessionStorage(
    'check_in',
    new Date().toISOString().slice(0, 10),
  );
  const [sessionCheckOut] = useSessionStorage('check_out', '1 Month');
  const [sessionLocation] = useSessionStorage('location', 'Los Angeles');
  const [sessionRoom] = useSessionStorage('room', 'For 4 persons');
  const [sessionProgram] = useSessionStorage('program', 'Program 1');
  const {
    register,
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
    resolver: yupResolver(bookSchema),
  });
  const [loading, toggleLoading] = useToggle();

  const handleBook = (data) => {
    toggleLoading();
    appointment.appointmentSchedulePost((error, data, response) => {
      toggleLoading();
    });
  };

  return (
    <ReservationWrapper>
      <Title variant='h3' secondaryFont>
        Schedule Appointment
      </Title>
      {RESERVATION_ITEMS.map(
        ({ title, name, options, placeholder, textfieldType, type }, index) => {
          if (type === 'select')
            return (
              <Select
                key={index}
                title={title}
                options={options}
                defaultOption={sessionStorage.getItem(name || title)}
                size='parent'
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
                size='parent'
                error={errors[name]}
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
                size='parent'
                onChange={(date) => setValue(name, date)}
              />
            );
        },
      )}
      <PriceWrapper>
        <PriceTitle>Price:</PriceTitle>
        <Price>{price}$ / month</Price>
      </PriceWrapper>
      <Button
        size='parent'
        loading={loading}
        onClick={handleSubmit((data) => handleBook(data))}>
        Book
      </Button>
    </ReservationWrapper>
  );
};
