'use client'
import React, { useEffect, useState } from 'react';
import {UserDataProps} from "@/app/Components/Types";

const ProfilHomePage : React.FC<UserDataProps> = ({props}) => {


    return (
        <div className={'col-span-full'}>
            <h1>Profil de {props.firstName}</h1>
            <p>Email : {props.email}</p>
            <p>ID : {props.id}</p>
            {/* Ajoutez d'autres informations spécifiques à l'utilisateur */}
        </div>
    );
};

export default ProfilHomePage;
