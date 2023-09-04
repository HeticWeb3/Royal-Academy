import {lessonsDataProps} from "@/app/Components/Types/Lessons/lessonsDataProps";

const Lesson = (data: { data: lessonsDataProps }) => {
    const singleLesson = data
    console.log(singleLesson.data, 'ddd');
    return (
        <div className={' flex flex-col gap-lg lg:lg:gap-[120px] col-span-full my-lg'}>
            <h1 className={'text-base lg:text-subheading lg:text-center lg:mb-lg'}>{singleLesson.data.nom}</h1>

            <div className={'text-center lg:w-2/5 self-center leading-9 lg:text-lg flex flex-col lg:gap-7'}>
                <p className={'text-sm lg:text-base'}>{singleLesson.data.description}</p>
                <p>Il faut affiche la vidéo aussi</p>
            </div>
        </div>
    )
}
export default Lesson;