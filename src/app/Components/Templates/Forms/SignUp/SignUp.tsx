"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import {Icon} from "@/app/Components/Atoms";
import UserDataRegistrationForm from "@/app/Components/Organisms/Forms/SignUp/UserDataRegistrationForm/UserDataRegistrationForm";
import UserSubscriptionForm from "@/app/Components/Organisms/Forms/SignUp/UserSubscriptionForm/UserSubscriptionForm";



const SignUp: React.FunctionComponent = () => {
    const[registrationStepNumber, setRegistrationStepNumber] = useState(1);

    return (
        <>
        <div className={'flex flex-row align-center col-span-full justify-self-center'}>
            <Icon iconContent={'1'} iconSize={54} iconAlt={''} containerClass={' block bg-white w-[54px] text-blue-dark rounded-square text-[30px]'}/>
            <Icon iconContent={'./icons/arrow-right.svg'} iconSize={25} iconAlt={''} containerClass={'flex flex-col justify-center mx-2 max-w-[25px]'}/>
            <Icon iconContent={'2'} iconSize={54} iconAlt={''} containerClass={' block bg-white w-[54px] text-blue-dark rounded-square text-[30px] opacity-30'}/>
            <Icon iconContent={'./icons/arrow-right.svg'} iconSize={25} iconAlt={''} containerClass={'flex flex-col justify-center mx-2  max-w-[25px]'}/>
            <Icon iconContent={'3'} iconSize={54} iconAlt={''} containerClass={' block bg-white w-[54px] text-blue-dark rounded-square text-[30px] opacity-30'}/>
        </div> 
            {registrationStepNumber === 1 && (
                <UserDataRegistrationForm setRegistrationStepNumber={setRegistrationStepNumber}/>
                )}
            {registrationStepNumber === 2 && (
                <UserSubscriptionForm setRegistrationStepNumber={setRegistrationStepNumber}/>
                )}
        </>
    )
}

export default SignUp