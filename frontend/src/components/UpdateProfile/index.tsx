import { Form, Formik, FormikValues } from "formik";
import { UpdateProfileContainer } from "./style";
import * as yup from 'yup'
import { availableImageTypes } from "../../config/availableImageType";
import { DropImage } from "./DropImage";
import { DeleteAccount } from "./DeleteAccount";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import { CircleNotch } from "phosphor-react";

export function UpdateProfile(): JSX.Element {

    const { user, updateUserImage } = useUser()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(false)
    }, [user])

    async function handleSubmit(values: FormikValues): Promise<void> {
        console.log(values.avatar)

        updateUserImage(values)
    }

    const initialValues = {
        avatar: ''
    }

    const avatarSchema = yup.object().shape({
        avatar: yup.mixed().test('fileFormat',
            'Image Only', value => {
                if (value) {
                    return availableImageTypes.includes(value.type)
                } else {
                    return false
                }
            })
    })

    return (
        <UpdateProfileContainer>
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={avatarSchema}
            >
                {({ errors, setFieldValue }) => (
                    <Form>
                        <DropImage
                            setFieldValue={setFieldValue}
                            errors={errors}
                        />
                        <div className="outsideDrop">
                            <h2>{user?.name}</h2>
                            <button className="submitButton" type="submit">
                                {isLoading
                                    ? <CircleNotch className='loader' weight="fill" />
                                    : 'Save Avatar'
                                }
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <DeleteAccount />
        </UpdateProfileContainer>
    )
}