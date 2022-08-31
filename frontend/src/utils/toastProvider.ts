import { toast } from 'react-toastify'
import { capitalize } from './capitalize'
import 'react-toastify/dist/ReactToastify.min.css'

export function toastSuccess(message: string) {
    toast.success(capitalize(message), {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    })
}

export function toastWarn(message: string) {
    toast.warn(capitalize(message), {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    })
}

export function toastError(message: string) {
    toast.error(capitalize(message), {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    })
}