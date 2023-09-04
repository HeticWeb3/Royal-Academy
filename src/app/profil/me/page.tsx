'use client'
import { useEffect, useState } from 'react';
import {CookieValueTypes, getCookie} from 'cookies-next';
import ProfilHomePage from "@/app/Components/Templates/Profil/ProfilHomePage/ProfilHomePage";
import {UserProps} from "@/app/Components/Types/User/UserType";
import {useAuth} from "@/Utils/Contexts/AuthContext";
import {UserDataProps} from "@/app/Components/Types";

const ProfilePage = () => {

    const [userLogged, setUserLogged] = useState<null | UserDataProps>(null)
    const auth = useAuth()

    useEffect(() => {
        if(auth.userConnected){
            setUserLogged(auth.userConnected)
        } else {
            setUserLogged(null)
        }

    }, [auth.userConnected])

    if (!userLogged) {
        return <div>Loading...</div>;
    }
    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <>
            <ProfilHomePage user={userLogged} isMyAccount={true}/>
        </>
    );
};

export default ProfilePage;