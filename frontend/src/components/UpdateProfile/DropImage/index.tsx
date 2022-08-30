import { createRef, useEffect, useState } from "react";
import Dropzone, { DropzoneRef } from "react-dropzone";
import { ArrowCounterClockwise, TrashSimple } from "phosphor-react";
import { availableImageTypes } from "../../../config/availableImageType";
import { DropImageContainer } from "./style";
import { FormikErrors } from "formik";
import { useUser } from "../../../hooks/useUser";

interface DropImageProps {
    errors: FormikErrors<{
        avatar: string
    }>
    setFieldValue(field: string, value: any): void
}

export function DropImage({ errors, setFieldValue }: DropImageProps): JSX.Element {

    const [preview, setPreview] = useState('')
    const dropzoneRef = createRef<DropzoneRef>()
    const { user } = useUser()

    useEffect(() => {
        setPreview(user?.avatarURL as string)
    }, [user])


    return (
        <DropImageContainer>
            <Dropzone
                onDrop={(file) => {
                    setFieldValue('avatar', file[0])
                    const reader = new FileReader()
                    reader.readAsDataURL(file[0])
                    reader.onload = () => {
                        const dataType = String(reader.result).split(';')[0].split(':')[1]
                        if (availableImageTypes.includes(dataType)) {
                            setPreview(String(reader.result))
                        }
                    }
                }}
                ref={dropzoneRef}
            >
                {({ getRootProps, getInputProps, isDragActive }) => (
                    preview
                        ? <div className='previewZone'>
                            <img className='preview' alt="Profile Preview" src={preview} />
                            <TrashSimple
                                weight="fill"
                                className="removeButton"
                                tabIndex={0}
                                onClick={() => {
                                    setPreview('')
                                    setFieldValue('avatar', null)
                                }}

                            />
                        </div>
                        : <div className={
                            `dragZone
                            ${errors.avatar ? 'dragZoneError' : ''}
                            ${isDragActive ? 'isDragActive' : ''}`
                        }
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <ArrowCounterClockwise
                                weight="bold"
                                className='undoButton'
                                tabIndex={0}
                                onClick={(event) => {
                                    event.stopPropagation()
                                    setPreview(user?.avatarURL as string)
                                }}
                            />
                            {isDragActive ?
                                <p>Drop the file Here</p> :
                                <p>Click or Drag 'n Drop file here</p>
                            }
                            {errors.avatar && <div className="errorMessage">{String(errors.avatar)}</div>}
                        </div>
                )}
            </Dropzone>
        </DropImageContainer>
    )
}