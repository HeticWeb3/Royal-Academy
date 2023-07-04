import * as Yup from 'yup';

export const PasswordConfirmationValidationSchema = (passwordFieldValue:string) => {
    return Yup.string()
        .required('Required')
        .oneOf([Yup.ref(passwordFieldValue)], 'Do not match');
};