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
    firstName: FirstNameValidationSchema(),
    lastName: LastNameValidationSchema(),
    birthDate: BirthdateValidationSchema(),
    email: EmailValidationSchema(),
    confirmEmail: EmailConfirmationValidationSchema('email'),
    password: PasswordValidationSchema(),
    confirmPassword: PasswordConfirmationValidationSchema('password'),
    phoneNumber: PhoneValidationSchema(),
    confirmPhoneNumber: PhoneConfirmationValidationSchema('phoneNumber'),
});
}