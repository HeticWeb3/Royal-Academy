import * as Yup from 'yup';

export const PasswordValidationSchema = Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    )
    .required('Password is required');