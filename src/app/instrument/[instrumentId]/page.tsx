'use client'
import {CookieValueTypes, getCookie} from "cookies-next";
import {useEffect, useState} from "react";
import {GET} from "@/Utils/Get/Get";
import {useParams} from "next/navigation";
import {instrumentsDataProps} from "@/app/Components/Types";
import Instrument from "@/app/Components/Organisms/Instrument/Instrument";

const InstrumentPage = () => {
    const params = useParams();
    const { instrumentId } = params;
    const [instrumentData, setInstrumentData] = useState<instrumentsDataProps | null>(null);
    const fetchParams = (token: CookieValueTypes) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
    };
    useEffect(() => {
        const fetchInstrumentData = async () => {
            try {
                const data: instrumentsDataProps = await GET({url:`instrument/${instrumentId}`, params:fetchParams(getCookie('accesstoken'))});
                setInstrumentData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du professor:', error);
            }
        };

        if (instrumentId) {
            fetchInstrumentData();
        }
    }, [instrumentId]);

    if (!instrumentId || !instrumentData) {
        return <div>Loading...</div>;
    }
    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <>
            <Instrument data={instrumentData}/>
        </>
    );
};
export default InstrumentPage;