import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ReturnProps<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export function usePersistedState<T>(key: string, ininitialState: T): ReturnProps<T> {
    const [state, setState] = useState(ininitialState)

    useEffect(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            setState(JSON.parse(storageValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}