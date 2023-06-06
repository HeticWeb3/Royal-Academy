"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import { Formik, Form, Field, FormikProps } from 'formik'
import {IFormStatusProps, IFormStatusTypes, RegistrationInputTypes} from "@/app/Components/Types";
import {SignupSchema} from "./ValidationSchema";
import {FormikDatePicker} from "@/app/Components/Atoms/Forms";
import {Button,TextField} from "@mui/material";
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
    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState<IFormStatusTypes>({
        message: '',
        type: '',
    })

    const createNewUser = async (data: RegistrationInputTypes, resetForm: Function) => {
        try {
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error) {
            const response = error.response
            if (
                response.data === 'user already exist' &&
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
                        <Form>
                            <h1 className={''}>Sign up</h1>

                            <Field
                                name="firstName"
                                id="firstName"
                                label="First Name"
                                value={values.firstName}
                                type="text"
                                helperText={
                                    errors.firstName && touched.firstName
                                        ? errors.firstName
                                        : 'Enter your first name.'
                                }
                                error={
                                    !!(errors.firstName && touched.firstName)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="lastName"
                                id="lastName"
                                label="Last Name"
                                value={values.lastName}
                                type="text"
                                helperText={
                                    errors.lastName && touched.lastName
                                        ? errors.lastName
                                        : 'Enter your last name.'
                                }
                                error={
                                    !!(errors.lastName && touched.lastName)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            <FormikDatePicker
                                name="birthDate"
                                id="birthDate"
                                label="birthDate"
                                value={values.birthDate}
                                renderInput={(params) => (
                                    <TextField {...params} label="birthDate" />
                                )}
                                helperText={
                                    errors.birthDate && touched.birthDate
                                        ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                                        : 'One uppercase, one lowercase, one special character and no spaces'
                                }
                                error={
                                    !!(errors.birthDate && touched.birthDate)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="email"
                                id="email"
                                label="Email"
                                value={values.email}
                                type="email"
                                helperText={
                                    errors.email && touched.email
                                        ? errors.email
                                        : 'Enter email-id'
                                }
                                error={
                                    !!(errors.email && touched.email)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="confirmEmail"
                                id="confirmEmail"
                                label="Email"
                                value={values.confirmEmail}
                                type="email"
                                helperText={
                                    errors.confirmEmail && touched.confirmEmail
                                        ? errors.confirmEmail
                                        : 'Enter email-id'
                                }
                                error={
                                    !!(errors.confirmEmail && touched.confirmEmail)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="password"
                                id="password"
                                label="Password"
                                value={values.password}
                                type="password"
                                helperText={
                                    errors.password &&
                                    touched.password
                                        ? errors.password
                                        : 'Re-enter password to confirm'
                                }
                                error={
                                    !!(errors.password && touched.password)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm password"
                                value={values.confirmPassword}
                                type="password"
                                helperText={
                                    errors.confirmPassword &&
                                    touched.confirmPassword
                                        ? errors.confirmPassword
                                        : 'Re-enter password to confirm'
                                }
                                error={
                                    !!(errors.confirmPassword && touched.confirmPassword)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="phoneNumber"
                                id="phoneNumber"
                                label="Phone Number"
                                value={values.phoneNumber}
                                type="text"
                                helperText={
                                    errors.phoneNumber &&
                                    touched.phoneNumber
                                        ? errors.phoneNumber
                                        : 'Re-enter password to confirm'
                                }
                                error={
                                    !!(errors.phoneNumber && touched.phoneNumber)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Field
                                name="confirmPhoneNumber"
                                id="confirmPhoneNumber"
                                label="Confirm Phone Number"
                                value={values.confirmPhoneNumber}
                                type="text"
                                helperText={
                                    errors.confirmPhoneNumber &&
                                    touched.confirmPhoneNumber
                                        ? errors.confirmPhoneNumber
                                        : 'Re-enter password to confirm'
                                }
                                error={
                                    !!(errors.confirmPhoneNumber && touched.confirmPhoneNumber)
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                disabled={isSubmitting}
                            >
                                Submit
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