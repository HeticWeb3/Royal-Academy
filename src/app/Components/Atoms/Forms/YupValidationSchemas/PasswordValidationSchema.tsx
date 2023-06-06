import * as Yup from 'yup';

export const PasswordValidationSchema = () => {
    return Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(
            /^(?=.*[A-Z])(?=.*\d).*$/,
            'Password must contain at least one uppercase letter and one digit'
        )
};