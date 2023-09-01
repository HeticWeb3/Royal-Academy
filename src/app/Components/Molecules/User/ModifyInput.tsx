import React, {useState} from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import editIcon from '/public/images/user/edit_icon.svg'
import Image from "next/image";

interface ModifyInputProps {
    inputName: string;
    inputType: string;
    inputValue : string;
    updateUser : (any) => void;
    validationSchema : any;
}

const ModifyUser: React.FC<ModifyInputProps> = ({
    inputName,
    inputType,
    updateUser,
    inputValue,
    validationSchema
}) => {

    const [isTargeted,setIsTargeted] = useState<boolean>(false);

    const changeTarget = () => {
        setIsTargeted(!isTargeted)
    }


    const ObjectValidation =  Yup.object().shape({
            [inputName]: validationSchema()
    })

    return (
        <div className={'text-black'}>
            {isTargeted ? (
                <Formik
                    initialValues={{ [inputName] : [inputValue]}}
                    validationSchema={ObjectValidation}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            updateUser(values)
                            changeTarget()
                            actions.setSubmitting(false);
                        }, 1000);
                    }}>
                    {({ errors, touched }) => (
                    <Form>
                        <div className={'formInput__wrapper'}>
                            <div className={'flex flex-row'}>
                                <Field name={inputName} />
                                <button type="submit" className={'button bg-blue-lightbis text-white text-sm font-normal'}>
                                    Update
                                </button>
                            </div>
                            {errors[inputName] && touched[inputName] ? (
                                <div className={'formInput__error'}>{errors[inputName]}</div>
                            ) : null
                            }
                        </div>
                    </Form>
                        )}
                </Formik>
            ) : <span className={'flex flex-row flex-nowrap'}>
                    {inputValue}
                    <span onClick={changeTarget} className={'ml-2 flex flex-col align-center justify-center'}>
                        <Image src={editIcon} alt={'edit'} width={20} height={20}/>
                    </span>
                </span>
                    }
        </div>
    )
}

export default ModifyUser;