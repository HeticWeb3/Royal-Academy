import {

    RegistrationInputTypes,
    UserDataProps
} from "@/app/Components/Types";

import React, {useState} from "react";
import ModifyInput from "@/app/Components/Molecules/User/ModifyInput";
import {FirstNameValidationSchema, LastNameValidationSchema,PhoneValidationSchema} from "@/app/Components/Atoms";

interface ModifyUserProps {
    userInfo: UserDataProps;
    onQuitChooseWindow: () => void;
}

const ModifyUser: React.FC<ModifyUserProps> = ({
    userInfo,
    onQuitChooseWindow,
}) => {
    const [newUserData,setNewUserData] = useState<UserDataProps>(userInfo);

    function updateUser(value) {
        const inputKey = Object.keys(value).toString()
        const inputValue = Object.values(value).toString()
        console.log(inputKey);
        console.log(inputValue);
         setNewUserData({...newUserData, [inputKey] : inputValue})
        console.log(newUserData)
    }

    const PatchUser = async (data: RegistrationInputTypes, resetForm: Function) => {
        try {
            await fetch('http://localhost:3000/api/user/me', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    if(response.ok) {
                        resetForm({})
                    }
                })
        } catch (error:any) {
        } finally {
            onQuitChooseWindow()
        }
    }
    return (
        <div className={'flex flex-col items-center'}>
            <ModifyInput inputName={'firstName'} inputType={'text'} inputValue={newUserData.firstName} updateUser={updateUser} validationSchema={FirstNameValidationSchema} />
            <ModifyInput inputName={'lastName'} inputType={'text'} inputValue={newUserData.lastName} updateUser={updateUser} validationSchema={LastNameValidationSchema}/>
            <ModifyInput inputName={'phoneNumber'} inputType={'text'} inputValue={newUserData.phoneNumber} updateUser={updateUser} validationSchema={PhoneValidationSchema} />
        </div>

    )
}


export default ModifyUser;