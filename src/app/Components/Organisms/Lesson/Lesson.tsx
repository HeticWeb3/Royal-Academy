import React, {useEffect, useState} from "react";
import {CookieValueTypes, getCookie} from "cookies-next";
import {GET} from "@/Utils/Get/Get";
import {coursesDataProps} from "@/app/Components/Types/Courses/coursesDataProps";
import {useParams} from "next/navigation";
import {dividerClasses} from "@mui/material";
import Image from "next/image";
import {lessonsDataProps} from "@/app/Components/Types/Lessons/lessonsDataProps";


interface LessonsProps {
    userLessons?: any;
    onQuitChooseWindow?: any;
    setUserLesson?: React.Dispatch<React.SetStateAction<any>>;
}

export const Lessons: React.FC<LessonsProps> = ({
                                                    userLessons,
                                                    onQuitChooseWindow,
                                                    setUserLesson,
                                                }) => {


    const [newUserLessons, setNewUserLessons] = useState(userLessons);
    const [singleLessons, setSingleLessons] = useState<lessonsDataProps>();

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

        const fetchLessons = async () => {
            try {
                const lessons = await GET({url: `lesson/2`, params: fetchParams(getCookie('accesstoken'))});
                const data: lessonsDataProps = await lessons;
                setSingleLessons(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de la leçon :', error);
            }
        };
        fetchLessons();
    }, []);


    return (
        <div>
            <h1 className={'text-base lg:text-subheading lg:text-center lg:mb-lg'}>{singleLessons?.nom}</h1>
            <p className={'text-base  lg:text-center '}>{singleLessons?.description}</p>
        </div>
    )
}