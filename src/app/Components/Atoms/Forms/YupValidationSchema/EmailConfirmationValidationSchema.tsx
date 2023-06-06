import * as Yup from 'yup';

export const EmailConfirmationValidationSchema = (emailFieldValue) => {
    return Yup.string()
        .required('Email confirmation is required')
        .oneOf([Yup.ref(emailFieldValue)], 'Emails do not match');
};