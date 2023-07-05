"use client"; // This is a client component 👈🏽
import React, {useState, useEffect,MouseEventHandler} from 'react'
import {FormRegisterComponent} from "@/app/Components/Types";
import {SubscriptionInputTypes} from "@/app/Components/Types";

const UserSubscriptionForm: React.FunctionComponent<FormRegisterComponent> = ({setRegistrationStepNumber}) => {

    const [subscriptionPlan,setSubscriptionPlan] = useState<string|null>('')

    const chooseSubscriptionPlan = (event:any) => {

        if(event.currentTarget){
            setSubscriptionPlan(event?.currentTarget.value);
        }
    }

    useEffect(() => {
            console.log(subscriptionPlan)
    }, [subscriptionPlan]);

    const changeRegistrationStepNumber = (number: number) => {
        setRegistrationStepNumber(number)
    };
    /*const chooseSubscription = async (data: SubscriptionInputTypes) => {
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
            changeRegistrationStepNumber(3);
        }
    }*/

    return (
        <div className={'p-4 grid grid-cols-2 gap-x-[12px] gap-y-5'}>

            <button onClick={chooseSubscriptionPlan} value={'free'} id={'freesub'} className={`${subscriptionPlan === 'free'?'bg-white text-blue-lightbis':''} transition-colors col-span-full border-[1px] border-white rounded-base p-7 flex flex-row justify-between`}>
                <p>Free 30 days-trial</p>
                <div>
                    <p className={'font-semibold'}>0€/month</p>
                </div>
            </button>
            <label htmlFor={'freesub'} className={'col-span-full mb-lg'}>⛔️ Limited access to our masterclasses</label>

            <button onClick={chooseSubscriptionPlan} value={'monthly'} id={'monthlysub'} className={`${subscriptionPlan === 'monthly'?'bg-white text-blue-lightbis':''} transition-colors col-span-full border-[1px] border-white rounded-base p-7 flex flex-row justify-between`}>
                <p>Monthly</p>
                <div>
                    <p className={'font-semibold'}>19,80€/month</p>
                </div>
            </button>

            <button onClick={chooseSubscriptionPlan} value={'yearly'} id={'yearlysub'} className={`${subscriptionPlan === 'yearly'?'bg-white text-blue-lightbis':''} transition-colors col-span-full border-[1px] border-white rounded-base p-7 flex flex-row justify-between`}>
                <p>Yearly</p>
                <div className={'flex flex-row flex-nowrap gap-4'}>
                    <span className={`${subscriptionPlan === 'yearly'?'bg-black text-white':'bg-blue-extralight text-black'} font-bold rounded-sm px-3`}>-50%</span>
                    <p className={'font-semibold'}>118,80€/year</p>
                </div>
            </button>

            <label htmlFor={'yearlysub'} className={'col-span-full flex flex-col gap-3 mb-7'}>
                <p>✅ Unlimited access to all our masterclasses</p>
                <p>✅ New videos available every month</p>
                <p>✅ Exclusive interviews with the world's greatest professors</p>
                <p>✅ Sheet music annotated by our professors, and ready for download</p>
                <p>✅ Multi angle videos available in HD on all you devices</p>
            </label>

            <button
                type="submit"
                className={'button bg-blue-lightbis text-white lg:text-base font-normal antialiased col-span-full'}
                >
                Finalize your payment
            </button>
        </div>

    )
}

export default UserSubscriptionForm;