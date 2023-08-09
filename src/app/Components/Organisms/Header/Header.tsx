"use client";
import { useContext } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import logo from '/public/images/logo.png'
import user from '/public/icons/user.svg'
import { useAuth } from '@/Utils/Contexts/AuthContext';


const Header = () => {
    const auth = useAuth()
    return (
        <div className={'flex w-full my-3 lg:my-6 px-6 lg:px-12 justify-between items-center'}>
            <div className={'w-[42px] lg:w-[54px]'}>
                <Link href="/">
                    <Image src={logo} alt={"Logo de la Saline Royal Academy"} className={'w-full h-full'}/>
                </Link>
            </div>
            {auth.userConnected ? 
                <div className={'w-[33px] lg:w-[36px]'}>
                    <Link href="/">
                        <Image src={user} alt={"Logo de la Saline Royal Academy"} className={'w-full h-full'}/>
                    </Link>
                </div>
            :
            <Link href="/login" className='lg:text-base'>Se connecter</Link> 
        }
        </div>
    )
}

export default Header;