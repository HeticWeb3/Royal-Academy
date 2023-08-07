import * as Yup from 'yup';

export const PasswordValidationSchema = () => {
    return Yup.string()
        .required('Required')
        .min(8, 'At least 8 characters long')
        .matches(
            /^(?=.*[A-Z])(?=.*\d).*$/,
            'Need A-Z  & 1-9'
        )
};
export const PasswordUpdateValidationSchema = () => {
    return Yup.string()
        .min(8, 'At least 8 characters long')
        .matches(
            /^(?=.*[A-Z])(?=.*\d).*$/,
            'Need A-Z  & 1-9'
        )
};