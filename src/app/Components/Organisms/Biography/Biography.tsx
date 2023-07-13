"use client"; // This is a client component 👈🏽
import React, {useState,} from 'react';

import {BiographyProps,} from "@/app/Components/Types";
import Image from "next/image";



const Biography = (data: { data: BiographyProps }) => {

const biographyData = data.data;
return (
    <div className={'flex flex-col items-center justify-center gap-6 lg:grid lg:grid-cols-12'}>
        <div className={'w-full lg:col-span-4 self-start'}>
            <div className={'w-3/5 h-[300px] relative rounded-sm overflow-hidden mx-auto '}>
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

            <div className={'text-center mt-6'}>
                <h1 className={'text-lg'}>{(biographyData.firstName?biographyData.firstName:null) +' '+ (biographyData.lastName?biographyData.lastName:null)}</h1>
                <p className={'font-bold'}>{biographyData.career?biographyData.career:null}</p>

                {biographyData.school? (
                    <p className={'text-[15px]'}>Currently in {biographyData.school}</p>
                ):null}

            </div>
        </div>
        <div className={'text-[16px] col-span-8'}>
            <p>{biographyData.description?biographyData.description:null}</p>

        {biographyData.titleWin ? (
            <>
                <h3 className={'mt-6 text-lg'}>Awards</h3>
                <p>{biographyData.titleWin}</p>
            </>
        ):null}
            {biographyData.diploma ? (
            <>
                <h3 className={'mt-6 text-lg'}>Degree</h3>
                <p>{biographyData.diploma}</p>
            </>
        ):null}
        </div>



    </div>
)}

export default Biography;