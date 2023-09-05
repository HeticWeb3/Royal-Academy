'use client'
import {CookieValueTypes, getCookie} from "cookies-next";
import {useEffect, useState} from "react";
import Course from "@/app/Components/Organisms/Course/Course"
import {GET} from "@/Utils/Get/Get";
import {useParams} from "next/navigation";
import {coursesDataProps} from "@/app/Components/Types/Courses/coursesDataProps";

const CoursePage = () => {
    const params = useParams();
    const { courseId } = params;
    const [courseData, setCourseData] = useState<coursesDataProps | null>(null);
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
                const data: coursesDataProps = await GET({url:`course/${courseId}`, params:fetchParams(getCookie('accesstoken'))});
                setCourseData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du professor:', error);
            }
        };

        if (courseId) {
            fetchUserData();
        }
    }, [courseId]);

    if (!courseId || !courseData) {
        return <div>Loading...</div>;
    }
    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <>
            <Course data={courseData}/>
        </>
    );
};

export default CoursePage;