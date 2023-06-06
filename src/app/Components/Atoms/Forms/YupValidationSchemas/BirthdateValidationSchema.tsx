import * as Yup from 'yup';

export const BirthdateValidationSchema = () => {
    return Yup.string()
        .required('Date of birth is required')
        .max(new Date().getTime(), 'Date of birth cannot be in the future');
}