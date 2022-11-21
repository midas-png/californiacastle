import { useSessionStorage } from 'domain';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InformationWrapper, AppointmentDataWrapper } from './styles';
import { bookSchema } from './schema';
import { Button, Datepicker, Select, Title, Textfield } from 'ui';
import { BOOKER_ITEMS } from 'data';

export const Information = () => {
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

  const handleBookingData = (data) => {
    const values = getValues();
    Object.keys(values).forEach((key) => {
      sessionStorage.setItem(key, values[key]);
    });
  };

  return (
    <InformationWrapper>
      <Title variant='h2'>Schedule Appointment</Title>
      <AppointmentDataWrapper>
        <Textfield
          title='name'
          name='name'
          size='parent'
          placeholder='Enter name'
          error={errors.name}
          {...register('name')}
        />
        <Textfield
          title='email'
          name='email'
          size='parent'
          placeholder='Enter email'
          error={errors.email}
          {...register('email')}
        />
        <Textfield
          type='number'
          title='Phone number'
          name='phoneNumber'
          size='parent'
          placeholder='Enter phone number'
          error={errors.phoneNumber}
          {...register('phoneNumber')}
        />
        {BOOKER_ITEMS.map(({ title, name, options, type }, index) => {
          if (type === 'select')
            return (
              <Select
                key={index}
                title={title}
                options={options}
                size='parent'
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
                size='parent'
                onChange={(date) => setValue(name, date)}
              />
            );
        })}
        <Button
          size='parent'
          onClick={handleSubmit((data) => handleBookingData(data))}>
          Book
        </Button>
      </AppointmentDataWrapper>
    </InformationWrapper>
  );
};
