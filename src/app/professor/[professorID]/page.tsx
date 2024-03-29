'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {GET} from "@/Utils/Get/Get";
import {CookieValueTypes, getCookie} from 'cookies-next';
import {BiographyProps} from "@/app/Components/Types";
import Biography from "@/app/Components/Organisms/Biography/Biography";
import {Loading} from "@/app/Components/Atoms/Utils";

const ProfessorPage = () => {
    const params = useParams();
    const { professorID } = params;
    const [teacherData, setTeacherData] = useState<BiographyProps | null>(null);

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
                const data: BiographyProps = await GET({url:`teacher/${professorID}`, params:fetchParams(getCookie('accesstoken'))});
                setTeacherData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du professor:', error);
            }
        };

        if (professorID) {
            fetchUserData();
        }
    }, [professorID]);

    if (!professorID || !teacherData) {
        return <Loading/>;
    }
    return (
        <>
            <div className={'col-span-full mt-lg'}>
                <Biography data={teacherData}/>
            </div>
        </>
    );
};

export default ProfessorPage;
