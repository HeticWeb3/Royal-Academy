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
    EmailUpdateValidationSchema,
    EmailUpdateConfirmationValidationSchema,
    PasswordUpdateValidationSchema,
    PasswordUpdateConfirmationValidationSchema,
    PhoneUpdateValidationSchema,
    PhoneUpdateConfirmationValidationSchema,
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

export const UpdateSchema = () =>{
    return Yup.object().shape({
        birthDate: BirthdateValidationSchema(),
        email: EmailUpdateValidationSchema(),
        confirmEmail: EmailUpdateConfirmationValidationSchema('email'),
        password: PasswordUpdateValidationSchema(),
        confirmPassword: PasswordUpdateConfirmationValidationSchema('password'),
        phoneNumber: PhoneUpdateValidationSchema(),
        confirmPhoneNumber: PhoneUpdateConfirmationValidationSchema('phoneNumber'),
    });
}

export const SigninSchema = () =>{
    return Yup.object().shape({
        loginEmail: EmailValidationSchema(),
    });
}