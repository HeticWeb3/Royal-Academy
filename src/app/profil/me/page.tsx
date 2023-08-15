'use client'
import { useEffect, useState } from 'react';
import {GET} from "@/Utils/Get/Get";
import {CookieValueTypes, getCookie} from 'cookies-next';
import {UserDataProps} from "@/app/Components/Types";
import ProfilHomePage from "@/app/Components/Templates/Profil/ProfilHomePage/ProfilHomePage";

const ProfilePage = () => {

    const [userData, setUserData] = useState<UserDataProps | null>(null);


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
                const user = await GET({url:`user/me`, params:fetchParams(getCookie('accesstoken'))});
                const data: UserDataProps = await user;
                setUserData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
            }
        };

        if (!userData) {
            fetchUserData();
        }
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }
    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <>
            <ProfilHomePage user={userData}/>
        </>
    );
};

export default ProfilePage;