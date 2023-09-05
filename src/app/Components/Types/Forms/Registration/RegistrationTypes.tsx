
export interface RegistrationInputTypes {
    firstName : string,
    lastName : string,
    birthDate : Date,
    email : string,
    confirmEmail : string,
    password : string | undefined,
    confirmPassword : string | undefined,
    phoneNumber : string,
    confirmPhoneNumber : string
}

export interface SubscriptionInputTypes {
    subscription : string,
}