"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import {Icon} from "@/app/Components/Atoms";
import UserDataRegistrationForm from "@/app/Components/Organisms/Forms/SignUp/UserDataRegistrationForm/UserDataRegistrationForm";
import UserSubscriptionForm from "@/app/Components/Organisms/Forms/SignUp/UserSubscriptionForm/UserSubscriptionForm";



const SignUp: React.FunctionComponent = () => {
    const[registrationStepNumber, setRegistrationStepNumber] = useState(1);

    return (
        <div className={'col-span-full lg:col-start-5 lg:col-end-9'}>
            <div className={'flex flex-row align-center col-span-full justify-center py-lg'}>
                <Icon iconContent={'1'} iconSize={54} iconAlt={''} containerClass={`${registrationStepNumber === 1?'':'opacity-30'} block bg-white w-[54px] text-blue-dark rounded-square text-[30px]`}/>
                <Icon iconContent={'./icons/arrow-right.svg'} iconSize={25} iconAlt={''} containerClass={'flex flex-col justify-center mx-2 max-w-[25px]'}/>
                <Icon iconContent={'2'} iconSize={54} iconAlt={''} containerClass={`${registrationStepNumber === 2?'':'opacity-30'} block bg-white w-[54px] text-blue-dark rounded-square text-[30px]`}/>
                <Icon iconContent={'./icons/arrow-right.svg'} iconSize={25} iconAlt={''} containerClass={'flex flex-col justify-center mx-2  max-w-[25px]'}/>
                <Icon iconContent={'3'} iconSize={54} iconAlt={''} containerClass={`${registrationStepNumber === 3?'':'opacity-30'} block bg-white w-[54px] text-blue-dark rounded-square text-[30px]`}/>
            </div>
                {registrationStepNumber === 1 && (
                    <UserDataRegistrationForm setRegistrationStepNumber={setRegistrationStepNumber}/>
                    )}
                {registrationStepNumber === 2 && (
                    <UserSubscriptionForm setRegistrationStepNumber={setRegistrationStepNumber}/>
                    )}
                {/*{registrationStepNumber === 3 && (
                    <UserPaymentForm setRegistrationStepNumber={setRegistrationStepNumber}/>
                    )}*/}
        </div>
    )
}

export default SignUp