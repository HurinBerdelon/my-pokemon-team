import { Form, Formik, FormikValues } from "formik";
import { UpdateProfileContainer } from "./style";
import * as yup from 'yup'
import { availableImageTypes } from "../../config/availableImageType";
import { DropImage } from "./DropImage";
import { DeleteAccount } from "./DeleteAccount";

export function UpdateProfile(): JSX.Element {

    async function handleSubmit(values: FormikValues): Promise<void> {

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
                            <h2>Gojou Satoru</h2>
                            <button className="submitButton" type="submit">Save Avatar</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <DeleteAccount />
        </UpdateProfileContainer>
    )
}