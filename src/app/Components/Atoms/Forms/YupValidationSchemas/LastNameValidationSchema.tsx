import * as Yup from 'yup';

export const LastNameValidationSchema = () => {
    return Yup.string()
        .required('Required')
        .matches(/^[A-Za-z\\s\-]+$/, 'Should only contain letters')
        .min(2, 'At least 2 characters long')
};