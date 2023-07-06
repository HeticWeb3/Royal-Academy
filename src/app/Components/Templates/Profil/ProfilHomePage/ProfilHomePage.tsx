'use client'
import React, { useEffect, useState } from 'react';
import {UserDataProps} from "@/app/Components/Types";

const ProfilHomePage = (user: { user: UserDataProps }) => {

    const userInfo = user.user

    return (
        <div className={'col-span-full'}>
            <h1>Profil de {userInfo.firstName}</h1>
            <p>Email : {userInfo.email}</p>
            <p>ID : {userInfo.id}</p>
            {/* Ajoutez d'autres informations spécifiques à l'utilisateur */}
        </div>
    );
};

export default ProfilHomePage;
