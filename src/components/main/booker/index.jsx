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
    options: ['Los Angeles', 'Miami', 'Detroit'],
    type: 'select',
  },
  {
    title: 'room:',
    options: ['For 2 persons', 'For 4 Persons'],
    type: 'select',
  },
  {
    title: 'people:',
    options: true ? [1, 2, 3, 4] : [1, 2],
    type: 'select',
  },
  {
    title: 'programm:',
    options: ['Programm 1', 'Promgramm 2'],
    type: 'select',
  },
];

export const Booker = () => {
  return (
    <BookerWrapper>
      {BOOKER_ITEMS.map(({ title, options, type }, index) => {
        if (type === 'select')
          return (
            <Select
              key={index}
              title={title}
              options={options}
              adaptiveStretch={true}
            />
          );
        else
          return (
            <Datepicker key={index} title={title} adaptiveStretch={true} />
          );
      })}
      <Button adaptiveStretch={true}>Book</Button>
    </BookerWrapper>
  );
};
