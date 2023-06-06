import * as Yup from 'yup';

export const PhoneConfirmationValidationSchema = (phoneNumberFieldValue) => {
    return Yup.string()
        .required('Phone number confirmation is required')
        .oneOf([Yup.ref(phoneNumberFieldValue)], 'Phone numbers do not match');
};