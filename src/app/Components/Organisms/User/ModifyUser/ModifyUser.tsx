import {

    RegistrationInputTypes,
    UserDataProps
} from "@/app/Components/Types";

import React, {useState} from "react";
import ModifyInput from "@/app/Components/Molecules/User/ModifyInput";
import {FirstNameValidationSchema, LastNameValidationSchema,PhoneValidationSchema} from "@/app/Components/Atoms";
import {getCookie} from "cookies-next";
import {redirect} from "next/navigation";

interface ModifyUserProps {
    userInfo: UserDataProps;
    onQuitChooseWindow: () => void;
    setUserInfo : React.Dispatch<React.SetStateAction<any>>;
}

const ModifyUser: React.FC<ModifyUserProps> = ({
    userInfo,
    onQuitChooseWindow,
   setUserInfo
}) => {
    const [newUserData,setNewUserData] = useState<UserDataProps>(userInfo);

    function updateUser(value: Record<string, any>) {
        const inputKey = Object.keys(value).toString()
        const inputValue = Object.values(value).toString()
         setNewUserData({...newUserData, [inputKey] : inputValue})
    }

    const PatchUser = async () => {
        try {
            await fetch('http://localhost:3000/api/user/me', {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer `+getCookie('accesstoken'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserData),
            })
                .then(response => {
                    if(response.ok) {
                        console.log('Successfully')
                    }
                })
        } catch (error:any) {
            console.log('Error: ' + error)

        } finally {
            setUserInfo(newUserData)
            onQuitChooseWindow()
        }
    }
    return (
        <>
            <div className={'flex flex-col w-1/2 gap-5 mx-auto'}>
                <ModifyInput inputName={'firstName'} inputType={'text'} inputValue={newUserData.firstName} updateUser={updateUser} validationSchema={FirstNameValidationSchema} />
                <ModifyInput inputName={'lastName'} inputType={'text'} inputValue={newUserData.lastName} updateUser={updateUser} validationSchema={LastNameValidationSchema}/>
                <ModifyInput inputName={'phoneNumber'} inputType={'text'} inputValue={newUserData.phoneNumber} updateUser={updateUser} validationSchema={PhoneValidationSchema} />
            </div>
            <div className={'flex flex-row justify-center'}>
                <button
                    onClick={PatchUser}
                    type="button"
                    className={'button bg-blue-lightbis text-white font-normal text-base antialiased mt-xl py-6 px-lg'}
                >
                    Validate
                </button>
            </div>
        </>
    )
}


export default ModifyUser;