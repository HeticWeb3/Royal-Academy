import {lessonsDataProps} from "@/app/Components/Types/Lessons/lessonsDataProps";
import ReactPlayer from 'react-player'
import React, {useState} from "react";
import {Icon} from "@/app/Components/Atoms";

const Lesson = (data: { data: lessonsDataProps }) => {
    const singleLesson = data
    const [isStarted, setIsStarted] = useState<string>('started');

    const lessonStatus = ['started' , 'finished' , 'sent'];
    let buttonLabel = '';

    switch (isStarted) {

        case 'started':  buttonLabel = 'LESSON FINISHED'; break;
        case 'finished':  buttonLabel = 'UPLOAD YOUR VIDEO'; break;
        case 'sent':  buttonLabel = 'VIDEO SENT'; break;

        default: console.log("unknown error")
    }

    return (
        <div>
            <nav className={'subheader grid grid-cols-6 '}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="57" viewBox="0 0 62 57" fill="none">
                        <path d="M20.9393 24.9393C20.3536 25.5251 20.3536 26.4749 20.9393 27.0607L30.4853 36.6066C31.0711 37.1924 32.0208 37.1924 32.6066 36.6066C33.1924 36.0208 33.1924 35.0711 32.6066 34.4853L24.1213 26L32.6066 17.5147C33.1924 16.9289 33.1924 15.9792 32.6066 15.3934C32.0208 14.8076 31.0711 14.8076 30.4853 15.3934L20.9393 24.9393ZM24 24.5L22 24.5L22 27.5L24 27.5L24 24.5Z" fill="white"/>
                    </svg>
                </div>
                <h1 className={'text-base lg:text-subheading self-center lg:mb-lg font-bold text-center text-lg col-start-2 col-end-6'}>{singleLesson.data.nom}</h1>
            </nav>
            <div className={' flex flex-col gap-7'}>
                <div>
                    <ReactPlayer url='https://youtu.be/S_O0lUA_lPw?si=NEGessB78ulPNT-o' controls={true} width={'100%'} />
                </div>
                
                <div>
                    <div className={'flex flex-row justify-center items-center text-[15px]'}>

                        <div className={`${ isStarted !== lessonStatus[0]? 'opacity-30':''} flex flex-col justify-center items-center gap-2`}>
                            <Icon iconContent={'/icons/utils/done.svg'} iconSize={34} iconAlt={''}
                                  containerClass={`block border-[1px] border-white w-[45px] text-blue-dark rounded-square text-[30px] flex flex-nowrap justify-center`}/>
                            <p className={'max-w-[70px] text-center'}>Lesson finished</p>
                        </div>

                        <Icon iconContent={'/icons/arrow-right.svg'} iconSize={25} iconAlt={''} containerClass={`${ isStarted !== lessonStatus[0]? 'opacity-30':''} text-white flex flex-col justify-center mx-2  max-w-[25px]`}/>


                        <div className={`${ isStarted !== lessonStatus[1]? 'opacity-30':''} flex flex-col justify-center items-center gap-2`}>
                            <Icon iconContent={'/icons/utils/done.svg'} iconSize={34} iconAlt={''}
                                  containerClass={`block border-[1px] border-white w-[45px] text-blue-dark rounded-square text-[30px] flex flex-nowrap justify-center`}/>
                            <p className={'max-w-[70px] text-center'}>Vidéo sent</p>
                        </div>

                            <Icon iconContent={'/icons/arrow-right.svg'} iconSize={25} iconAlt={''} containerClass={`${ isStarted !== lessonStatus[1]? 'opacity-30':''} text-white flex flex-col justify-center mx-2  max-w-[25px]`}/>

                        <div className={`${ isStarted !== lessonStatus[2]? 'opacity-30':''} flex flex-col justify-center items-center gap-2`}>
                            <Icon iconContent={'/icons/utils/done.svg'} iconSize={34} iconAlt={''}
                                  containerClass={`block border-[1px] border-white w-[45px] text-blue-dark rounded-square text-[30px] flex flex-nowrap justify-center`}/>
                            <p className={'max-w-[70px] text-center'}>Correction available</p>
                        </div>
                    </div>
                </div>

                <button
                    className={'btn rounded-lg border-[1px] py-4 border-white w-1/2 mx-auto hover:bg-white hover:text-blue-dark hover:border-blue-dark'}>
                    {buttonLabel}
                </button>
            </div>

                <div className={'mt-lg lg:w-2/5 lg:text-lg flex flex-col lg:gap-7'}>
                    <h2 className={'lg:text-subheading lg:mb-lg  text-lg'}>DESCRIPTION</h2>
                    <p className={'mt-6 antialiased font-light '}>{singleLesson.data.description}</p>
                </div>

        </div>
    )
}
export default Lesson;