'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {GET} from "@/Utils/Get/Get";
import {CookieValueTypes, getCookie} from 'cookies-next';

// Définition des types
interface UserData {
    id: string;
    name: string;
    email: string;
}

const ProfilePage = () => {
    const params = useParams();
    const { userID } = params;
    console.log(userID)

    const [userData, setUserData] = useState<UserData | null>(null);


    const fetchParams = (token: CookieValueTypes) => {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
    };
console.log(getCookie('accesstoken'))

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await GET({url:`user/${userID}`, params:fetchParams(getCookie('accesstoken'))});
                const data: UserData = await user.json();
                setUserData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
            }
        };

        if (userID) {
            fetchUserData();
        }
    }, [userID]);

    if (!userID || !userData) {
        // Pendant le chargement ou si l'ID de l'utilisateur n'est pas encore disponible, vous pouvez afficher un indicateur de chargement ou un message
        return <div>Chargement...</div>;
    }

    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <div>
            <h1>Profil de {userData.name}</h1>
            <p>Email : {userData.email}</p>
            {/* Ajoutez d'autres informations spécifiques à l'utilisateur */}
        </div>
    );
};

export default ProfilePage;
