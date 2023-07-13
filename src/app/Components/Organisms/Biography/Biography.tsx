"use client"; // This is a client component 👈🏽
import React, {useState,} from 'react';

import {
    BiographyProps,
} from "@/app/Components/Types";
import Image from "next/image";



const Biography = (data: { data: BiographyProps }) => {

    const biographyData = data.data;
    console.log(biographyData)

return (
    <div className={'flex flex-col items-center justify-center gap-6'}>
        <div className={'w-4/5 h-[300px] relative rounded-sm overflow-hidden'}>
            {biographyData.photo[0] ? (
                <Image
                    src={biographyData.photo[0]}
                    alt={biographyData.photo[0].url?biographyData.photo[0].url :''}
                    fill={true}
                    style={{
                        objectFit: 'cover',
                        objectPosition:'center',
                    }}
                />
                ) : (
                <Image
                    src={'https://picsum.photos/id/237/200/300'}
                    alt={'Random Image'}
                    fill={true}
                    style={{
                        objectFit: 'cover',
                        objectPosition:'center',
                    }}
                />
            )}
        </div>

        <div className={'text-center'}>
            <h1 className={'text-lg'}>{(biographyData.firstName?biographyData.firstName:null) +' '+ (biographyData.lastName?biographyData.lastName:null)}</h1>
            <p className={'font-bold'}>{biographyData.career?biographyData.career:null}</p>
        </div>

        <div>
            <p className={'text-[16px]'}>{biographyData.description?biographyData.description:null}</p>
        </div>



    </div>
)}

export default Biography;