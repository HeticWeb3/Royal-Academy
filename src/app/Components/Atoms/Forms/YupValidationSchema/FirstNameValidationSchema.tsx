import * as Yup from 'yup';

export const FirstNameValidationSchema = () => {
    return Yup.string()
        .required('First name is required')
        .matches(/^[A-Za-z]+$/, 'First name should only contain letters')
        .min(2, 'First name must be at least 2 characters long')
};