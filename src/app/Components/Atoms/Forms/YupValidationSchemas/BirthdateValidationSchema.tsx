import * as Yup from 'yup';

export const BirthdateValidationSchema = () => {
    return Yup.string()
        .required('Required')
        .max(new Date().getTime(), 'Cannot be in the future');
}