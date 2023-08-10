"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import logo from '/public/images/logo.png'
import user from '/public/icons/user.svg'
import { useAuth } from '@/Utils/Contexts/AuthContext';
import type {UserProps} from "@/app/Components/Types/User/UserType";



const Header = () => {
    const [userLogged, setUserLogged] = useState<null | UserProps>(null)
    const auth = useAuth()
    
    useEffect(() => {
        if(auth.userConnected){
            setUserLogged(auth.userConnected)
        } else {
            setUserLogged(null)
        }

}, [auth.userConnected])

    return (
        <div className={'flex w-full my-3 lg:my-6 px-6 lg:px-12 justify-between items-center'}>
            <div className={'w-[42px] lg:w-[54px]'}>
                <Link href="/">
                    <Image src={logo} alt={"Logo de la Saline Royal Academy"} className={'w-full h-full'}/>
                </Link>
            </div>
            {userLogged != null ?
                <div className={'flex items-center'}>
                    <Link href="/" className={'w-[33px] lg:w-[36px]'}>
                        <Image src={user} alt={"Logo de la Saline Royal Academy"} className={'w-full h-full'}/>
                    </Link>
                    <div className='text-[14px] lg:text-base'>{userLogged.email}</div>
                </div>
            :
            <Link href="/login" className='text-[14px] lg:text-base'>Se connecter</Link> 
        }
        </div>
    )
}

export default Header;