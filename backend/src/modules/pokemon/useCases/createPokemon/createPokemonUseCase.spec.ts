import 'reflect-metadata'
import { InMemoryPokemonsRepository } from '../../repositories/inMemory/InMemoryPokemonsRepository'
import { CreatePokemonUseCase } from './createPokemonUseCase'

let inMemoryPokemonRepository: InMemoryPokemonsRepository
let createPokemonUseCase: CreatePokemonUseCase

describe('Create Pokemon UseCase', () => {

    beforeEach(() => {
        inMemoryPokemonRepository = new InMemoryPokemonsRepository()
        createPokemonUseCase = new CreatePokemonUseCase(inMemoryPokemonRepository)
    })

    it('should be able to create a pokemon', async () => {
        const pokeId = 'some-valid-id'

        const result = await createPokemonUseCase.execute(pokeId, 'pokemonName', 'imageUrl.test', ['type1'])

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('pokeID')
        expect(result).toHaveProperty('createdAt')
    })

    it('should not be able to create a pokemon if it already exists', async () => {
        const pokeId = 'some-valid-id'

        await createPokemonUseCase.execute(pokeId, 'pokemonName', 'imageUrl.test', ['type1'])
        await createPokemonUseCase.execute(pokeId, 'pokemonName', 'imageUrl.test', ['type1'])

        expect(inMemoryPokemonRepository.pokemonsRepository.length).toEqual(1)
    })
})