import * as Yup from 'yup';

export const EmailValidationSchema = () => {
    return Yup.string()
        .email('Please enter a valid email')
        .required('Required');
};
export const EmailUpdateValidationSchema = () => {
    return Yup.string()
        .email('Please enter a valid email')
};