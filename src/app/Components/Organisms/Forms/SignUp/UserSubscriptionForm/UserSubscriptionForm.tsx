"use client"; // This is a client component 👈🏽
import React, { useState } from 'react'
import {FormRegisterComponent} from "@/app/Components/Types";

const UserSubscriptionForm: React.FunctionComponent<FormRegisterComponent> = ({setRegistrationStepNumber}) => {
    const changeRegistrationStepNumber = (number: number) => {
        setRegistrationStepNumber(number)
    };
    /*const createNewUser = async (data: RegistrationInputTypes, resetForm: Function) => {
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
                response.error.type === 'ValidationEmailError' &&
                response.status === 400
            ) {
                setFormStatus(formStatusProps.duplicate)
            } else {
                setFormStatus(formStatusProps.error)
            }
        } finally {
            setDisplayFormStatus(true);
            changeRegistrationStepNumber(2);
        }
    }*/

    return (
        <div>
            <div>Free</div>
            <div>Mensuel</div>
            <div>Annuel</div>
        </div>
    )
}

export default UserSubscriptionForm;