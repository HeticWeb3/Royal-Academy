import React, {useEffect, useState} from "react";
import {CookieValueTypes, getCookie} from "cookies-next";
import {GET} from "@/Utils/Get/Get";
import {coursesDataProps} from "@/app/Components/Types/Courses/coursesDataProps";
import {useParams} from "next/navigation";
import {dividerClasses} from "@mui/material";
import Image from "next/image";


interface CoursesProps {
    userCourses?: any;
    onQuitChooseWindow?: any;
    setUserCourse?: React.Dispatch<React.SetStateAction<any>>;
}

export const Courses: React.FC<CoursesProps> = ({
                                                    userCourses,
                                                    onQuitChooseWindow,
                                                    setUserCourse,
                                                }) => {

    const LastLesson = [
        {
            id: 20,
            name: 'Mozart',
            thumbnail: '/images/user/lessonimage.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac elit at purus mattis cursus ut sit amet dolor. Nulla aliquet varius velit vitae molestie. Nunc convallis augue sit amet orci hendrerit pretium vel nec tellus. Maecenas turpis mi, egestas vitae dui vitae, semper maximus nunc. Pellentesque quis pretium orci. Maecenas lacinia nisl tincidunt, pretium dolor nec, laoreet libero. Vivamus vel orci purus. Etiam lobortis fringilla dolor, in egestas arcu posuere vel Nulla facilisi. Suspendisse viverra nisl sed auctor blandit. Mauris vel leo ullamcorper, semper lacus id, congue lectus. Maecenas in sollicitudin lacus. Nulla consequat massa metus, rutrum sodales ex tristique sed. Curabitur et sagittis ante, vitae eleifend ipsum. Curabitur fringilla magna lectus, malesuada gravida nisl placerat quis.',
        }]


    const [newUserCourses, setNewUserCourses] = useState(userCourses);
    const [singleCourses, setSingleCourses] = useState<coursesDataProps>();

    const params = useParams();
    const uid = params.uid;

    useEffect(() => {
        const fetchParams = (token: CookieValueTypes) => {
            return {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            };
        };

        // useEffect(()=> {
        //     setNewUserCourses(uid)
        // }, [newUserCourses]);

        const fetchCourses = async () => {
            try {
                const courses = await GET({url: `course/3`, params: fetchParams(getCookie('accesstoken'))});
                const data: coursesDataProps = await courses;
                setSingleCourses(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du cours :', error);
            }
        };
        fetchCourses();
    }, []);

    const lesssons = singleCourses?.lesson.map(lessons => {
        return (<>{lessons.nom}</>)
    })

    return (
        <div>
            <h1 className={'text-base lg:text-subheading lg:text-center lg:mb-lg'}>{singleCourses?.name}</h1>
            <div className={'lg:text-center columns-12 row-auto justify-center content-center justify-items-center'}>
                <div className={'lg:text-center columns-4'}>
                    <button
                        className={'lg:text-center relative w-auto h-auto rounded-t-base lg:rounded-none overflow-hidden justify-center'}>
                        <Image
                            src={LastLesson[0].thumbnail}
                            alt={'Last lesson thumbnail'}
                            fill={true}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                        />
                    </button>
                </div>
            </div>
            <p className={'text-base  lg:text-center '}>{singleCourses?.description}</p>
            <p>Style : {singleCourses?.style.name}</p>
            <p>Instrument : {singleCourses?.instrument?.name}</p>
            <p>Professeur : {singleCourses?.teacher?.firstName} {singleCourses?.teacher?.lastName}</p>
            <p>Niveau : {singleCourses?.level?.nom}</p>

            {lesssons}

        </div>
    )
}