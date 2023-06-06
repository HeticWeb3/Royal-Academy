import * as Yup from 'yup';
import {
    EmailConfirmationValidationSchema,
    EmailValidationSchema,
    FirstNameValidationSchema,
    LastNameValidationSchema,
    BirthdateValidationSchema,
    PasswordValidationSchema,
    PasswordConfirmationValidationSchema,
    PhoneValidationSchema,
    PhoneConfirmationValidationSchema,
} from "@/app/Components/Atoms";

export const SignupSchema = () =>{
    return Yup.object().shape({
    firstname: FirstNameValidationSchema(),
    lastname: LastNameValidationSchema(),
    birthdate: BirthdateValidationSchema(),
    email: EmailValidationSchema(),
    confirm_email: EmailConfirmationValidationSchema('email'),
    password: PasswordValidationSchema(),
    confirmPassword: PasswordConfirmationValidationSchema('password'),
    phone: PhoneValidationSchema(),
    confirmPhone: PhoneConfirmationValidationSchema('phone'),
});
}