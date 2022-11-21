export const BOOKER_ITEMS = [
  {
    title: 'check-in',
    name: 'check_in',
    type: 'date',
  },
  {
    title: 'check-out in',
    name: 'check_out',
    options: [
      '1 Month',
      '2 Months',
      '3 Months',
      '4 Months',
      '5 Months',
      '6 Months',
      'More than 6 months',
    ],
    type: 'select',
  },
  {
    title: 'location',
    options: ['Los Angeles', 'Miami', 'Detroit'],
    type: 'select',
  },
  {
    title: 'room',
    options: ['For 4 persons', 'For 2 Persons'],
    type: 'select',
  },
  {
    title: 'program',
    options: ['Program 1', 'Promgram 2'],
    type: 'select',
  },
];
