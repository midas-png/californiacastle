import * as yup from 'yup';

const ERROR_EMPTY_FIELD = 'Field is required';
const ERROR_EMAIL = 'Email is invalid';
const ERROR_DIGITS_LENGTH = 'Invalid phone format';

export const bookSchema = yup.object().shape({
  email: yup.string().email(ERROR_EMAIL).trim().required(ERROR_EMPTY_FIELD),
  name: yup.string().trim().required(ERROR_EMPTY_FIELD),
  phoneNumber: yup
    .string()
    .trim()
    .min(10, ERROR_DIGITS_LENGTH)
    .max(10, ERROR_DIGITS_LENGTH)
    .required(ERROR_EMPTY_FIELD),
});
