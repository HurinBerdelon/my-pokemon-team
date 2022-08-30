import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            backgroundOne: string,
            backgroundTwo: string,

            boxOne: string,
            boxTwo: string,

            buttons: string,
            inputBG: string,
            inputPlaceholder: string,

            textOne: string,
            textTwo: string,
            textThree: string,

            black: string,
            white: string,
            gray: string,

            danger: string
            green: string

            types: {
                normal: string,
                fire: string,
                water: string,
                electric: string,
                grass: string,
                ice: string,
                fighting: string,
                poison: string,
                ground: string,
                flying: string,
                psychic: string,
                bug: string,
                rock: string,
                ghost: string,
                dragon: string,
                dark: string,
                steel: string,
                fairy: string,
            }
        }
    }
}

