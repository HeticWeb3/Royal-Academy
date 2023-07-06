'use client'
import React, { useEffect, useState } from 'react';
import {UserDataProps} from "@/app/Components/Types";
import baseAvatar from '/public/images/user/avatar.jpg'
import Image from "next/image";
import {Icon} from "@/app/Components/Atoms";

const ProfilHomePage = (user: { user: UserDataProps }) => {

    const userInfo = user.user
    const instruments = [
        {
            id: 1,
            name: 'Violin',
            description: 'The Violin'
        },
        {
            id: 2,
            name: 'Voice',
            description: 'The Voice'
        },
        {
            id : 5,
            name : 'piano',
            description : 'blablabla'
        },
        {
            id: 12,
            name: 'flute',
            description: 'The Violin'
        },
        {
            id: 14,
            name: 'viola',
            description: 'The Voice'
        },
        {
            id : 20,
            name : 'oboe',
            description : 'blablabla'
        }
    ]
    console.log(userInfo)

    return (
        <div className={'col-span-full my-lg flex flex-col gap-lg'}>

            <div className={"flex flex-row flex-nowrap items-center gap-6"}>
                <div className={'rounded-square block relative w-[80px] h-[80px] overflow-hidden'}>
                    <Image
                        src={userInfo.avatar?userInfo.avatar:baseAvatar}
                        alt={'avatar'}
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition:'center',
                        }}
                    />
                </div>
                <h1 className={'text-lg'}>Hello <span className={'font-bold'}>{userInfo.firstName}</span></h1>
            </div>

            <div className={'flex flex-col gap-6'}>
                <div className={'flex flex-row flex-nowrap gap-3 items-center'}>
                    <h2 className={'uppercase text-lg'}>My instruments</h2>
                    <button >
                        <Icon iconContent={'/icons/plus.svg'} iconSize={20} iconAlt={''} containerClass={''}/>
                    </button>
                </div>

                <div className={'flex flex-row flex-nowrap gap-7 overflow-x-scroll no-scrollbar'}>
                    {instruments.map((instrument) => (
                        <div key={instrument.id}>
                           <Icon iconContent={`/icons/${instrument.name.toLowerCase()}.svg`} iconSize={50} iconAlt={instrument.name} containerClass={'w-[110px] bg-white rounded-square p-2 flex items-center justify-center'}/>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default ProfilHomePage;
