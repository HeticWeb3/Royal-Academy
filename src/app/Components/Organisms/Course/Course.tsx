import {coursesDataProps} from "@/app/Components/Types/Courses/coursesDataProps";
import React , {useState,useEffect} from "react";
import Link from "next/link";

const Course = (data: { data: coursesDataProps }) => {
    const singleCourses = data.data
    const [lessons,setLessons] = useState<any>(singleCourses.lesson.sort( (a, b) => a.id - b.id));
    const [professors,setProfessors] = useState<any>(null);
    const backgroundImageUrl = singleCourses.imageUrl

    return (

        <div className={' flex flex-col gap-7 lg:gap-[6] col-span-full'}>
            <div
                style={{backgroundImage: `url(${backgroundImageUrl})`}}
                className={ `bg-cover bg-center aspect-video flex flex-col justify-center items-centers -mx-[15px] -mx-[77px]`}>
                <h1 className={'text-lg uppercase lg:text-heading lg:mb-lg text-center'}>{singleCourses.name}</h1>
            </div>

            <div className={'flex justify-center my-lg'}>
                <button className={'button bg-white text-blue-light w-full lg:w-1/4 hover:bg-blue-light hover:text-white transition-colors'}>
                    Start the lessons
                </button>
            </div>


            <div className={'text'}>
                {//professors?.map((prof => {
                    //  <p>{prof.firstName?prof.firstName:null} {prof.lastName?prof.lastName:null} </p>
                    //   }
                    //    ))
                }

            </div>
            <div className={'lg:mb-[120px]'}>
                <p className={'text-center lg:w-2/3 mx-auto'}>{singleCourses.description}</p>
            </div>

            <div className={'mb-7'}>
                <h2 className={'text-lg mb-7'}>ALL LESSONS</h2>
                <div className={'flex flex-row flex-nowrap gap-7 overflow-x-scroll no-scrollbar mx-[-15px] px-[15px]'}>
                    {lessons?.map((lesson: Record<string, any>) => {
                        return (
                            <Link href={`/lesson/${lesson.id}`}
                                key={'lesson-'+lesson.id}
                                className={'max-w-[120px]'} >
                                <div
                                    style={{backgroundImage: `url(${lesson.imageUrl})`}}
                                    className={'w-[120px] h-[70px] bg-red-light rounded-sm bg-center bg-cover'}></div>
                                <h3 className={'truncate text-center'}>{lesson.nom}</h3>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Course;