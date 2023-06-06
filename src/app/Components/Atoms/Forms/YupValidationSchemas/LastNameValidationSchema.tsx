import * as Yup from 'yup';

export const LastNameValidationSchema = () => {
    return Yup.string()
        .required('Last name is required')
        .matches(/^[A-Za-z]+$/, 'First name should only contain letters')
        .min(2, 'Last name must be at least 2 characters long')
};