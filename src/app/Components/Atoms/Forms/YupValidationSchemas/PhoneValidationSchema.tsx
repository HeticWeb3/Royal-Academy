import * as Yup from 'yup';

export const PhoneValidationSchema = () => {
    return Yup.string()
        .required('Required')
        .matches(
            /^(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?\d{1,14}$/,
            'Invalid phone number')
}