import * as Yup from 'yup';

export const PasswordConfirmationValidationSchema = (passwordFieldValue) => {
    return Yup.string()
        .required('Password confirmation is required')
        .oneOf([Yup.ref(passwordFieldValue)], 'Passwords do not match');
};