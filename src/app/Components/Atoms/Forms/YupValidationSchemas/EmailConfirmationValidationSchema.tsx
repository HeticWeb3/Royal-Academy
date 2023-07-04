import * as Yup from 'yup';

export const EmailConfirmationValidationSchema = (emailFieldValue) => {
    return Yup.string()
        .required('Required')
        .oneOf([Yup.ref(emailFieldValue)], 'Emails do not match');
};