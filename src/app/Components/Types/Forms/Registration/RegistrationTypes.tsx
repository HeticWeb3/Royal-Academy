
export interface RegistrationInputTypes {
    firstName? : string,
    lastName? : string,
    birthDate : Date,
    email : string,
    confirmEmail : string,
    password : string,
    confirmPassword : string,
    phoneNumber : string,
    confirmPhoneNumber : string
}

export interface SubscriptionInputTypes {
    subscription : string,
}