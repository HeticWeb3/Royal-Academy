"use client"; // This is a client component 👈🏽
import React, {useState,useContext} from 'react';
import { setCookie } from 'cookies-next';
import {Formik, Form, Field, ErrorMessage, FormikProps} from 'formik';
import {
    IFormStatusProps,
    IFormStatusTypes,
    LoginInputTypes,
} from "@/app/Components/Types";
import {SigninSchema} from "@/app/Components/Atoms";
import {useAuth} from "@/Utils/Contexts/AuthContext";

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

const UserLogin: React.FunctionComponent = ({req,res}) => {

    const { login } = useAuth();
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
                body: JSON.stringify({loginEmail:'test@test7.com',loginPassword:'test1234'}),
            });

            if (response.ok) {
                const token = await response.text();
                console.log(token);
                login();
                setCookie('accesstoken', token,{maxAge:60 * 60 * 24,sameSite:true});
                setFormStatus(formStatusProps.success);
                resetForm({});
            }
        } catch (error) {
            setFormStatus(formStatusProps.error);
        } finally {
            setDisplayFormStatus(true);
        }
    };
    return (
                <Formik
                    initialValues={{
                        loginEmail: '',
                        loginPassword: ''
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
                            <Form id={"loginForm"} className={'p-4 grid grid-cols-2 gap-x-[12px] gap-y-[31px]'}>
                                <Field
                                    className={'formInput col-span-2'}
                                    name="loginEmail"
                                    id="loginEmail"
                                    label="Email"
                                    value={values.loginEmail}
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="loginEmail" component="div" className="error-message" />

                                <Field
                                    className={'formInput col-span-2'}
                                    name="loginPassword"
                                    id="loginPassword"
                                    label="Password"
                                    value={values.loginPassword}
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage name="loginPassword" component="div" className="error-message" />

                                <button
                                    type="submit"
                                    form={'loginForm'}
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

    )
}

export default UserLogin;