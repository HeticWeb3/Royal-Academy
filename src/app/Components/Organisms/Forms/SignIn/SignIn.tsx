"use client"; // This is a client component 👈🏽

import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage, FormikProps} from 'formik';
import {
    IFormStatusProps,
    IFormStatusTypes,
    LoginInputTypes,
} from "@/app/Components/Types";
import {SigninSchema} from "@/app/Components/Atoms";

const formStatusProps: IFormStatusProps = {
    success: {
        message: 'Welcome !',
        type: 'success',
    },
    error: {
        message: 'Something went wrong. Please try again.',
        type: 'error',
    },
}

const UserLogin: React.FunctionComponent = () => {
    const [displayFormStatus, setDisplayFormStatus] = useState(false);
    const [formStatus, setFormStatus] = useState<IFormStatusTypes>({
        message: '',
        type: '',
    })

    const connectUser = async (data: LoginInputTypes, resetForm: Function) => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const token = await response.text();
                console.log(token);

                res.cookie('token', 'my-secret-token', { maxAge: 900000, httpOnly: true });

                setFormStatus(formStatusProps.success);
                resetForm({});
            } else {
                // Gérer les erreurs de réponse
                if (response.status === 400) {
                    const responseBody = await response.json();
                    if (responseBody.error.type === 'ValidationEmailError') {
                        setFormStatus(formStatusProps.duplicate);
                    }
                } else {
                    setFormStatus(formStatusProps.error);
                }
            }
        } catch (error) {
            // Gérer les erreurs de requête
            setFormStatus(formStatusProps.error);
        } finally {
            setDisplayFormStatus(true);
        }
    };

    return (
            <div className=''>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}

                    onSubmit={(values: LoginInputTypes, actions) => {
                        connectUser(values, actions.resetForm)
                        setTimeout(() => {
                            actions.setSubmitting(false)
                        }, 500)
                    }}
                    validationSchema={SigninSchema}
                >
                    {(props: FormikProps<LoginInputTypes>) => {
                        const {
                            values,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                        } = props
                        return (
                            <Form className={'p-4 grid grid-cols-2 gap-x-[12px] gap-y-[31px]'}>
                                <Field
                                    className={'formInput col-span-2'}
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
                                    className={'formInput col-span-2'}
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

                                <button
                                    type="submit"
                                    className={'button bg-blue-lightbis text-white font-normal antialiased col-span-full'}
                                    disabled={isSubmitting}
                                >
                                    Login
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
    )
}

export default UserLogin;