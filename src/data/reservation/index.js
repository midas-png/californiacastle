export const RESERVATION_ITEMS = [
  {
    title: 'name',
    name: 'name',
    type: 'textfield',
    placeholder: 'Enter name',
  },
  {
    title: 'email',
    name: 'email',
    type: 'textfield',
    placeholder: 'Enter email',
  },
  {
    title: 'Phone number',
    name: 'phoneNumber',
    type: 'textfield',
    textfieldType: 'number',
    placeholder: 'Enter phone number',
  },
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
    title: 'program',
    options: ['Program 1', 'Promgram 2'],
    type: 'select',
  },
];
