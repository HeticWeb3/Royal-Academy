'use client'
import Lessons from "@/app/Components/Organisms/Lesson/Lesson";
import {CookieValueTypes, getCookie} from "cookies-next";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";

import {lessonsDataProps} from "@/app/Components/Types/Lessons/lessonsDataProps";
import {GET} from "@/Utils/Get/Get";


const LessonPage = () => {
    const params = useParams();
    const { lessonId } = params;
    const [lessonData, setLessonData] = useState<lessonsDataProps | null>(null);


    const fetchParams = (token: CookieValueTypes) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
    };
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data: lessonsDataProps = await GET({url:`lesson/${lessonId}`, params:fetchParams(getCookie('accesstoken'))});
                setLessonData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du professor:', error);
            }
        };

        if (lessonId) {
            fetchUserData();
        }
    }, [lessonId]);

    if (!lessonId || !lessonData) {
        return <div>Loading...</div>;
    }

    console.log(lessonData)
    return (
        <>
            <Lessons data={lessonData}/>
        </>
    );
};

export default LessonPage;