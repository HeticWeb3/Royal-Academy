import * as Yup from 'yup';

export const PhoneNumberConfirmationValidationSchema = (phoneNumberFieldValue) => {
    return Yup.string()
        .required('Phone number confirmation is required')
        .oneOf([Yup.ref(phoneNumberFieldValue)], 'Phone numbers do not match');
};