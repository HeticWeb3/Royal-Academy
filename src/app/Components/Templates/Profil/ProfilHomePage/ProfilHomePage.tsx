'use client'
import React, { useEffect, useState } from 'react';
import {UserDataProps} from "@/app/Components/Types";
import baseAvatar from '/public/images/user/avatar.jpg'
import Image from "next/image";
import {Icon} from "@/app/Components/Atoms";
import Link from "next/link";
import ChooseInstruments from "@/app/Components/Organisms/User/ChooseInstruments/ChooseInstruments";

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
    const LastLesson = [
        {
            id: 20,
            name: 'Mozart',
            thumbnail:'/images/user/lessonimage.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel Nulla facilisi. Suspendisse viverra nisl sed auctor blandit. Mauris vel leo ullamcorper, semper lacus id, congue lectus. Maecenas in sollicitudin lacus. Nulla consequat massa metus, rutrum sodales ex tristique sed. Curabitur et sagittis ante, vitae eleifend ipsum. Curabitur fringilla magna lectus, malesuada gravida nisl placerat quis.',
            timeCode : '80%'
        }    ]
    const lastLessonThumbnailsProgression = 'w-[' + LastLesson[0].timeCode + ']';


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
                <div>
                    <h1 className={'text-lg'}>Hello <span className={'font-bold'}>{userInfo.firstName}</span></h1>
                    {userInfo?.schoolId?  (
                        <Link href={'/school/' + userInfo.schoolId}> Hetic </Link>
                    ) : null}
                </div>
            </div>
            <div className={"flex flex-row flex-nowrap items-center gap-6"}>
                <div>
                    {userInfo.bio ? (
                        <div className={'text-base'}>{userInfo.bio}</div>
                    ) : null}
                </div>
            </div>

            <div className={'flex flex-col gap-6'}>
                <div className={'flex flex-row flex-nowrap gap-3 items-center'}>
                    <h2 className={'uppercase text-lg'}>My instruments</h2>
                    <button >
                        <Icon iconContent={'/icons/plus.svg'} iconSize={20} iconAlt={''} containerClass={''}/>
                    </button>
                </div>

                <div className={'flex flex-row flex-nowrap gap-7 overflow-x-scroll no-scrollbar mx-[-15px] px-[15px]'}>
                    {instruments?.map((instrument) => (
                        <button key={instrument.id}>
                           <Icon iconContent={`/icons/${instrument.name.toLowerCase()}.svg`} iconSize={50} iconAlt={instrument.name} containerClass={'w-[110px] bg-white rounded-square p-2 flex items-center justify-center'}/>
                        </button>
                    ))}

                    {}
                    {!instruments? (
                        <div>
                            <p className={'text-sm'}>No instrument selected</p>
                        </div>
                    ) : null}

                </div>
            </div>

            <div className={'flex flex-col gap-6'}>
                <div className={'flex flex-row flex-nowrap gap-3 items-center'}>
                    <h2 className={'uppercase text-lg'}>Resume the course</h2>
                </div>

                <div className={'flex flex-row flex-nowrap gap-7 overflow-x-scroll no-scrollbar mx-[-15px] px-[15px]'}>
                    <button className={'relative w-[120px] h-[70px] rounded-t-base overflow-hidden'}>
                        <Image
                            src={LastLesson[0].thumbnail}
                            alt={'Last lesson thumbnail'}
                            fill={true}
                            style={{
                                objectFit: 'cover',
                                objectPosition:'center',
                            }}
                        />
                        <div className={'progressBar__wrapper absolute bottom-0 w-full h-[4px] bg-white'}>
                            <div className={`progressBar_position h-full bg-red-base ${lastLessonThumbnailsProgression}`}></div>
                        </div>
                    </button>
                </div>
            </div>

        <ChooseInstruments UserInstruments={instruments}/>

        </div>
    );
};

export default ProfilHomePage;
