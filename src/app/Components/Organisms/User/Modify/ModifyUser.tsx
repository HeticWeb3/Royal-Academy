'use client'
import React, { useEffect, useState } from 'react';
import {IFormStatusProps, IFormStatusTypes, RegistrationInputTypes, UserDataProps} from "@/app/Components/Types";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {ErrorMessage, Field, Form, Formik, FormikProps} from "formik";
import {FormikDatePicker, UpdateSchema} from "@/app/Components/Atoms";
import {LocalizationProvider} from "@mui/x-date-pickers";

const ModifyUser =  (userData: { user: UserDataProps }) => {

    const userInfo = userData.user

    const [displayFormStatus, setDisplayFormStatus] = useState(false);
    const [formStatus, setFormStatus] = useState<IFormStatusTypes>({
        message: '',
        type: '',
    })

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

    const modifyUser = async (data: RegistrationInputTypes, resetForm: Function) => {
        try {
            await fetch(`http://localhost:3000/api/user/${userInfo.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if(response.ok) {
                        setFormStatus(formStatusProps.success)
                        resetForm({})
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


    if (!userData) {
        return <div>Loading...</div>;
    }
    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className=''>
                <Formik
                    initialValues={{
                        birthDate: new Date(),
                        email: '',
                        confirmEmail:'',
                        password: '',
                        confirmPassword: '',
                        phoneNumber: '',
                        confirmPhoneNumber: '',
                    }}

                    onSubmit={(values: RegistrationInputTypes, actions) => {
                        modifyUser(values, actions.resetForm)
                        setTimeout(() => {
                            actions.setSubmitting(false)
                        }, 500)
                    }}
                    validationSchema={UpdateSchema}
                >
                    {(props: FormikProps<RegistrationInputTypes>) => {
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

                                <div className={`${errors.birthDate && touched.birthDate?'error':''} formInput__wrapper`}>
                                    <FormikDatePicker
                                        className={'formInput DateInput w-full'}
                                        name="birthDate"
                                        label="Date of birth"
                                        value={values.birthDate}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <ErrorMessage name="birthDate" component="div" className="formInput__error" />
                                </div>

                                <div></div>

                                <div className={`${errors.email && touched.email?'error':''} formInput__wrapper`}>
                                    <Field
                                        className={'formInput w-full'}
                                        name="email"
                                        id="email"
                                        label="Reset your email"
                                        value={values.email}
                                        type="email"
                                        placeholder="Reset your email"
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
                                        label="Confirm your new email"
                                        value={values.confirmEmail}
                                        type="email"
                                        placeholder="Confirm your new email"
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
                                        label="Reset your password"
                                        value={values.password}
                                        type="password"
                                        placeholder="Reset your password"
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
                                        label="Confirm your new password"
                                        value={values.confirmPassword}
                                        type="password"
                                        placeholder="Confirm your new password"
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
                                        label="Reset your phone number"
                                        value={values.phoneNumber}
                                        type="text"
                                        placeholder="Reset your phone number"
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
                                        label="Confirm your new phone number"
                                        placeholder="Confirm your new phone number"
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
                                    Update my profil
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
    );
};

export default ModifyUser;
