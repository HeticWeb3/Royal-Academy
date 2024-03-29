'use client'
import React, { useEffect, useState } from 'react';
import baseAvatar from '/public/images/user/avatar.jpg'
import Image from "next/image";
import {Icon} from "@/app/Components/Atoms";
import Link from "next/link";
import ChooseInstruments from "@/app/Components/Organisms/User/ChooseInstruments/ChooseInstruments";
import {array} from "prop-types";
import ModifyUser from "@/app/Components/Organisms/User/ModifyUser/ModifyUser";
import {UserDataProps} from "@/app/Components/Types";

const ProfilHomePage = ({user, isMyAccount}: {user: UserDataProps; isMyAccount: boolean}) => {

    const [showChooseInstruments,setShowChooseInstruments]= useState(false);
    const [showModifyUser,setShowModifyUser]= useState(false);
    const [userInfo,setUserInfo] = useState(user);
    const [userInstruments,setUserInstrument] = useState(user.instrument?user.instrument:[]);

    const OpenChooseIntruments = () => {
        setShowChooseInstruments(!showChooseInstruments);
    };
    const OpenModifyUser = () => {
        setShowModifyUser(!showModifyUser);
    };

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
        <div className={`${showChooseInstruments?'overflow-hidden':''} col-span-full my-lg flex flex-col gap-lg`}>

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
                    ) : <p>No School</p>}

                    {isMyAccount?  (
                        <button
                            onClick={ OpenModifyUser}
                            className="!text-grey-base text-[13px] hover:!text-white">Modify</button>
                        ): null}
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
                    {isMyAccount? (
                        <button onClick={OpenChooseIntruments} >
                            <Icon iconContent={'/icons/plus.svg'} iconSize={20} iconAlt={''} containerClass={''}/>
                        </button>
                    ) : null}
                </div>

                <div className={'flex flex-row flex-nowrap gap-7 overflow-x-scroll no-scrollbar mx-[-15px] px-[15px]'}>

                    {userInstruments.length > 0 ? (
                            userInstruments.map((instrument: Record<string, any>) => (
                            <button key={instrument.id}>
                               <Icon iconContent={`/icons/${instrument.name.toLowerCase()}.svg`} iconSize={50} iconAlt={instrument.name} containerClass={'w-[110px] bg-white rounded-square p-2 flex items-center justify-center'}/>
                            </button>
                        ))
                        ) :
                        <div>
                            <p className={'text-sm'}>No instrument selected</p>
                        </div>
                    }

                </div>
            </div>

            <div className={'flex flex-col gap-6'}>
                <div className={'flex flex-row flex-nowrap gap-3 items-center'}>
                    <h2 className={'uppercase text-lg'}>Resume the course</h2>
                </div>

                <div className={'flex flex-row flex-nowrap gap-7 overflow-x-scroll no-scrollbar mx-[-15px] px-[15px]'}>
                    <button className={'relative w-[120px] lg:w-[524px] h-[70px] lg:h-[313px] rounded-t-base lg:rounded-none overflow-hidden'}>
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
            {showChooseInstruments?  (
                <div className={'bg-grey-darker/75 w-screen h-screen absolute top-0 left-0 '}>
                    <div className={'bg-white py-lg px-7 rounded-base m-6 lg:w-1/3 mt-[10%] lg:mx-auto'}>
                        <h3 className={'text-black text-lg mb-xl text-center font-bold'}>Chose the other(s) instrument(s) you want to learn: </h3>
                        <ChooseInstruments userInstruments={userInstruments} setUserInstrument={setUserInstrument} onQuitChooseWindow={OpenChooseIntruments} />
                    </div>
                </div>
                ):null}
            {showModifyUser?  (
                <div className={'bg-grey-darker/75 w-screen h-screen absolute top-0 left-0 '}>
                    <div className={'bg-white py-lg px-7 rounded-base m-6 lg:w-1/3 mt-[10%] lg:mx-auto'}>
                        <h3 className={'text-black text-lg mb-xl text-center font-bold'}>Modify your profil</h3>
                        <ModifyUser userInfo={userInfo} setUserInfo={setUserInfo} onQuitChooseWindow={OpenModifyUser}/>
                    </div>
                </div>
                ):null}
            <div>
            </div>
        </div>
    );
};

export default ProfilHomePage;
