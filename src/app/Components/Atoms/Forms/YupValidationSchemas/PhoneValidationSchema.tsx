import * as Yup from 'yup';

export const PhoneValidationSchema = () => {
    return Yup.string()
        .required('Phone number is required')
        .matches(
            /^(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?\d{1,14}$/,
            'Invalid phone number')
}