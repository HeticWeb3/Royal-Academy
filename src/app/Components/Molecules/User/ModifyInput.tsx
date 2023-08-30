import React, {useState} from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";

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

    const ObjectValidation = () => {
        Yup.object().shape({
            firstName: validationSchema()
    })
}

console.log(ObjectValidation)
    return (
        <div className={'text-black'}>
            {isTargeted ? (
                <Formik
                    initialValues={{ [inputName] : [inputValue]}}
                    validationSchema={ObjectValidation}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            updateUser(values)
                            actions.setSubmitting(false);
                        }, 1000);
                    }}

                >
                    {({ errors, touched }) => (
                    <Form>
                        <>
                            <Field name={inputName} />
                            {errors[inputName] && touched[inputName] ? (
                                <div>{errors.firstName}</div>
                            ) : null
                            }
                        </>
                        <button type="submit">Submit</button>

                    </Form>
                        )}
                </Formik>
            ) : <span>
                    {inputValue}
                </span>
                    }
            <span onClick={changeTarget}>x</span>

        </div>



    )

}

export default ModifyUser;