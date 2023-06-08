"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import {Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import {IFormStatusProps, IFormStatusTypes, RegistrationInputTypes} from "@/app/Components/Types";
import {SignupSchema} from "./ValidationSchema";
import {FormikDatePicker} from "@/app/Components/Atoms/Forms";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers';


const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Signed up successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id already exist. Please use different email-id.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const SignUp: React.FunctionComponent = () => {
    const [displayFormStatus, setDisplayFormStatus] = useState(false);
    const[registrationStepNumber, setRegistrationStepNumber] = useState(1);
    const [formStatus, setFormStatus] = useState<IFormStatusTypes>({
        message: '',
        type: '',
    })

    const createNewUser = async (data: RegistrationInputTypes, resetForm: Function) => {
        try {
            await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.error.type === 'ValidationError' &&
                response.status === 400
            ) {
                setFormStatus(formStatusProps.duplicate)
            } else {
                setFormStatus(formStatusProps.error)
            }
        } finally {
            setDisplayFormStatus(true)
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className='bg-white text-black'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    birthDate: new Date(),
                    email: '',
                    confirmEmail:'',
                    password: '',
                    confirmPassword: '',
                    phoneNumber: '',
                    confirmPhoneNumber: '',
                }}

                onSubmit={(values: RegistrationInputTypes, actions) => {
                    createNewUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={SignupSchema}
            >
                {(props: FormikProps<RegistrationInputTypes>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props
                    return (
                        <Form className={'flex flex-col p-4'}>
                            <h1 className={''}>Sign up</h1>

                            <Field
                                className={'formInput'}
                                name="firstName"
                                id="firstName"
                                label="First Name"
                                value={values.firstName}
                                type="text"
                                placeholder="First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            <ErrorMessage name="firstName" component="div" className="error-message" />

                            <Field
                                name="lastName"
                                id="lastName"
                                label="Last Name"
                                value={values.lastName}
                                type="text"
                                placeholder="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="lastName" component="div" className="error-message" />

                            <FormikDatePicker
                                name="birthDate"
                                id="birthDate"
                                label="Birthdate"
                                value={values.birthDate}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="birthDate" component="div" className="error-message" />

                            <Field
                                name="email"
                                id="email"
                                label="Email"
                                value={values.email}
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="email" component="div" className="error-message" />

                            <Field
                                name="confirmEmail"
                                id="confirmEmail"
                                label="Email"
                                value={values.confirmEmail}
                                type="email"
                                placeholder="Confirm Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="confirmEmail" component="div" className="error-message" />

                            <Field
                                name="password"
                                id="password"
                                label="Password"
                                value={values.password}
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="password" component="div" className="error-message" />

                            <Field
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm password"
                                value={values.confirmPassword}
                                type="password"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="error-message" />

                            <Field
                                name="phoneNumber"
                                id="phoneNumber"
                                label="Phone Number"
                                value={values.phoneNumber}
                                type="text"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />

                            <Field
                                name="confirmPhoneNumber"
                                id="confirmPhoneNumber"
                                label="Confirm Phone Number"
                                placeholder="Confirm Phone Number"
                                value={values.confirmPhoneNumber}
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="confirmPhoneNumber" component="div" className="error-message" />

                            <button
                                type="submit"
                                className={'button bg-blue-lightbis text-white font-normal antialiased'}
                                disabled={isSubmitting}
                            >
                                Choose your subscription
                            </button>


                            {displayFormStatus && (
                                <div className="formStatus">
                                    {formStatus.type === 'error' ? (
                                        <p>
                                            {formStatus.message}
                                        </p>
                                    ) : formStatus.type ===
                                    'success' ? (
                                        <p>
                                            {formStatus.message}
                                        </p>
                                    ) : null}
                                </div>
                            )}
                        </Form>
                    )
                }}
            </Formik>
        </div>
        </LocalizationProvider>
    )
}

export default SignUp