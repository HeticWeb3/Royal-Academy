import * as Yup from 'yup';

export const PhoneConfirmationValidationSchema = (phoneNumberFieldValue:string) => {
    return Yup.string()
        .required('Required')
        .oneOf([Yup.ref(phoneNumberFieldValue)], 'Do not match');
};

export const PhoneUpdateConfirmationValidationSchema = (phoneNumberFieldValue:string) => {
    return Yup.string()
        .oneOf([Yup.ref(phoneNumberFieldValue)], 'Do not match');
};