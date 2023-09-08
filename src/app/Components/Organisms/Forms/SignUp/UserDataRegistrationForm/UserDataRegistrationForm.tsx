"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import {Formik, Form, Field, FormikProps, ErrorMessage} from 'formik'
import {
    FormRegisterComponent,
    IFormStatusProps,
    IFormStatusTypes,
    RegistrationInputTypes
} from "@/app/Components/Types";
import {SignupSchema} from "@/app/Components/Atoms/Forms";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers';


const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Signed up successfully.',
        type: 'success',
    },
    duplicate: {
        message: 'Email-id already exist. Please use different email.',
        type: 'error',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const UserDataRegistrationForm: React.FunctionComponent<FormRegisterComponent> = ({setRegistrationStepNumber}) => {

    const [displayFormStatus, setDisplayFormStatus] = useState(false);
    const [formStatus, setFormStatus] = useState<IFormStatusTypes>({
        message: '',
        type: '',
    })

    const changeRegistrationStepNumber = (number: number) => {
        setRegistrationStepNumber(number)
    };

    const createNewUser = async (data: RegistrationInputTypes, resetForm: Function) => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if(response.ok) {
                        setFormStatus(formStatusProps.success)
                        resetForm({})
                        changeRegistrationStepNumber(2);
                    }
                    else {
                        response.json().then(json => {
                            if (
                                json.error.type === 'ValidationEmailError' &&
                                response.status === 401
                            ) {
                                setFormStatus(formStatusProps.duplicate)
                            } else {
                                setFormStatus(formStatusProps.error)
                            }
                            setDisplayFormStatus(true);
                        })
                    }
                })
        } catch (error:any) {
        } finally {
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className=''>
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
                    {(props: FormikProps<any>) => {
                        const {
                            values,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                            errors,
                            touched
                        } = props

                        return (
                            <Form className={'p-4 grid grid-cols-2 gap-x-[12px] gap-y-[31px]'}>

                                <div className={`${errors.firstName && touched.firstName?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="firstName"
                                        id="firstName"
                                        label="First Name"
                                        value={values.firstName}
                                        type="text"
                                        placeholder="First Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    <ErrorMessage name="firstName" component="div" className="formInput__error" />
                                </div>

                                <div className={`${errors.lastName && touched.lastName?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="lastName"
                                        id="lastName"
                                        label="Last Name"
                                        value={values.lastName}
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="lastName" component="div" className="formInput__error" />
                                </div>


                                <div className={`${errors.email && touched.email?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="email"
                                        id="email"
                                        label="Email"
                                        value={values.email}
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="email" component="div" className="formInput__error" />
                                </div>

                                <div className={`${errors.confirmEmail && touched.confirmEmail?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="confirmEmail"
                                        id="confirmEmail"
                                        label="Email"
                                        value={values.confirmEmail}
                                        type="email"
                                        placeholder="Confirm Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="confirmEmail" component="div" className="formInput__error" />
                                </div>

                                <div className={`${errors.password && touched.password?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="password"
                                        id="password"
                                        label="Password"
                                        value={values.password}
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="password" component="div" className="formInput__error" />
                                </div>

                                <div className={`${errors.confirmPassword && touched.confirmPassword?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        label="Confirm password"
                                        value={values.confirmPassword}
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="formInput__error" />
                                </div>

                                <div className={`${errors.phoneNumber && touched.phoneNumber?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        label="Phone Number"
                                        value={values.phoneNumber}
                                        type="text"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="phoneNumber" component="div" className="formInput__error" />
                                </div>

                                <div className={`${errors.confirmPhoneNumber && touched.confirmPhoneNumber?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="confirmPhoneNumber"
                                        id="confirmPhoneNumber"
                                        label="Confirm Phone Number"
                                        placeholder="Confirm Phone Number"
                                        value={values.confirmPhoneNumber}
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="confirmPhoneNumber" component="div" className="formInput__error" />
                                </div>

                                <button
                                    type="submit"
                                    className={'button bg-blue-lightbis text-white font-normal antialiased col-span-full'}
                                    disabled={isSubmitting}
                                >
                                    Choose your subscription
                                </button>


                                {displayFormStatus && (
                                    <div className="formStatus col-span-2">
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

export default UserDataRegistrationForm;