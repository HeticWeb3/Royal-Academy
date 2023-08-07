import * as Yup from 'yup';

export const PasswordConfirmationValidationSchema = (passwordFieldValue:string) => {
    return Yup.string()
        .required('Required')
        .oneOf([Yup.ref(passwordFieldValue)], 'Do not match');
};

export const PasswordUpdateConfirmationValidationSchema = (passwordFieldValue:string) => {
    return Yup.string()
        .when("password", (passwordFieldValue, field) => {
            if (passwordFieldValue) {
                return field.required("Do not match").oneOf([Yup.ref("password")], 'Do not match');
            }
        })
};