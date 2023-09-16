'use client'
import { useEffect, useState } from 'react';
import ProfilHomePage from "@/app/Components/Templates/Profil/ProfilHomePage/ProfilHomePage";
import {useAuth} from "@/Utils/Contexts/AuthContext";
import {UserDataProps} from "@/app/Components/Types";
import {Loading} from "@/app/Components/Atoms/Utils";

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
        return <Loading/>;
    }
    // Affichez les données de l'utilisateur sur la page de profil
    return (
        <>
            <ProfilHomePage user={userLogged} isMyAccount={true}/>
        </>
    );
};

export default ProfilePage;