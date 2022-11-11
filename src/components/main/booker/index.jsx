import { BookerWrapper } from './styles';
import { Button, Datepicker, Select } from 'ui';

const BOOKER_ITEMS = [
  {
    title: 'check-in:',
    type: 'date',
  },
  {
    title: 'check-out:',
    type: 'date',
  },
  {
    title: 'location:',
    type: 'select',
  },
  {
    title: 'room:',
    type: 'select',
  },
  {
    title: 'people:',
    type: 'select',
  },
  {
    title: 'programm:',
    type: 'select',
  },
];

export const Booker = () => {
  return (
    <BookerWrapper>
      {BOOKER_ITEMS.map(({ title, type }, index) => {
        if (type === 'select')
          return <Select key={index} title={title} adaptiveStretch={true} />;
        else
          return (
            <Datepicker key={index} title={title} adaptiveStretch={true} />
          );
      })}
      <Button adaptiveStretch={true}>Book</Button>
    </BookerWrapper>
  );
};
