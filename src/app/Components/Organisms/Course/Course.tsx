import {coursesDataProps} from "@/app/Components/Types/Courses/coursesDataProps";

const Course = (data: { data: coursesDataProps }) => {
    const singleCourses = data

    const lesssons = singleCourses?.data.lesson.map(lessons => {
        return (<>{lessons.nom}</>)
    })
    return (
        <div className={' flex flex-col gap-lg lg:lg:gap-[120px] col-span-full my-lg'}>
            <h1 className={'text-base lg:text-subheading lg:text-center lg:mb-lg'}>{singleCourses.data.name}</h1>

            <div className={'text-center lg:w-2/5 self-center leading-9 lg:text-lg flex flex-col lg:gap-7'}>
                <p className={'text-sm lg:text-base'}>{singleCourses.data.description}</p>
                <p>Niveau : {singleCourses.data.level.nom}</p>
                <p>Professeur : {singleCourses.data.teacher?.firstName} {singleCourses.data.teacher?.lastName}</p>
                <p>Instrument : {singleCourses.data.instrument.name}</p>
                <p>Style : {singleCourses.data.style.name}</p>
            </div>

            {/*TODO : Affiche les leçons du cours avec une card (à faire)*/}
            <p>Les leçons du cours : {lesssons}</p>

        </div>
    )
}
export default Course;