import * as Yup from 'yup';

export const PhoneNumberValidationSchema = Yup.string()
    .required('Phone number is required')
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number format');