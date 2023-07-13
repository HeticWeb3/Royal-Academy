"use client"; // This is a client component 👈🏽
import React, {useState,} from 'react';

import {
    BiographyProps,
} from "@/app/Components/Types";



const Biography: React.FunctionComponent = (data:BiographyProps) => {

    console.log(data)

return (
    <div>Biography Page</div>
)}

export default Biography;