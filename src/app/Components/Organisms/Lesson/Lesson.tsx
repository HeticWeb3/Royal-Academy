import {lessonsDataProps} from "@/app/Components/Types/Lessons/lessonsDataProps";
import ReactPlayer from 'react-player'

const Lesson = (data: { data: lessonsDataProps }) => {
    const singleLesson = data
    console.log(singleLesson.data, 'ddd');
    return (
        <div>
            <nav className={'subheader grid grid-cols-6 '}>
                <div className={''}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="57" viewBox="0 0 62 57" fill="none">
                        <path d="M20.9393 24.9393C20.3536 25.5251 20.3536 26.4749 20.9393 27.0607L30.4853 36.6066C31.0711 37.1924 32.0208 37.1924 32.6066 36.6066C33.1924 36.0208 33.1924 35.0711 32.6066 34.4853L24.1213 26L32.6066 17.5147C33.1924 16.9289 33.1924 15.9792 32.6066 15.3934C32.0208 14.8076 31.0711 14.8076 30.4853 15.3934L20.9393 24.9393ZM24 24.5L22 24.5L22 27.5L24 27.5L24 24.5Z" fill="white"/>
                    </svg>
                </div>
                <h1 className={'text-base lg:text-subheading self-center lg:mb-lg font-bold text-center text-lg col-start-3 col-end-5'}>{singleLesson.data.nom}</h1>
            </nav>
            <div className={' flex flex-col gap-lg lg:lg:gap-[120px] col-span-full my-lg'}>

                <div>
                    <ReactPlayer url='https://youtu.be/S_O0lUA_lPw?si=NEGessB78ulPNT-o' controls={true} width={'100%'} />
                </div>
                <div className={'text-center lg:w-2/5 self-center leading-9 lg:text-lg flex flex-col lg:gap-7'}>
                    <p className={'text-sm lg:text-base'}>{singleLesson.data.description}</p>
                    <p>Il faut affiche la vidéo aussi</p>
                </div>
            </div>
        </div>
    )
}
export default Lesson;