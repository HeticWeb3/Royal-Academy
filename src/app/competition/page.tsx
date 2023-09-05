'use client'
import {CookieValueTypes, getCookie} from "cookies-next";
import {useEffect, useState} from "react";
import Course from "@/app/Components/Organisms/Course/Course"
import {GET} from "@/Utils/Get/Get";
import {useParams} from "next/navigation";
import {coursesDataProps} from "@/app/Components/Types/Courses/coursesDataProps";
import {competitionsDataProps} from "@/app/Components/Types/Competitions/competitionsDataProps";
import Competition from "@/app/Components/Organisms/Competition/Competition";

const CompetitionPage = () => {

    const [competitionData, setCompetitionData] = useState<competitionsDataProps[] | null>(null);
    const fetchParams = (token: CookieValueTypes) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
    };
    useEffect(() => {
        const fetchCompetitionData = async () => {
            try {
                const data: competitionsDataProps[] = await GET({url:`competition/all`, params:fetchParams(getCookie('accesstoken'))});
                setCompetitionData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du professor:', error);
            }
        };

            fetchCompetitionData();

    }, []);

    const competition = competitionData?.map(competition => {
        return (<Competition data={competition} />)
    })

    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <>
            {competition}
        </>
    );
};

export default CompetitionPage;