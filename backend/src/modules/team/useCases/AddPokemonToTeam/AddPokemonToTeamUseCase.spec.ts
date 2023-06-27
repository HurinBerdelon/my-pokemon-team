import 'reflect-metadata'
import { v4 as uuidv4 } from 'uuid'
import { AppError } from '../../../../errors/AppError'
import { ErrorMessages } from '../../../../errors/ErrorMessages'
import { InMemoryPokemonsRepository } from '../../../pokemon/repositories/inMemory/InMemoryPokemonsRepository'
import { InMemoryTeamsRepository } from '../../repositories/inMemory/inMemoryTeamsRepository'
import { AddPokemonToTeamUseCase } from './AddPokemonToTeamUseCase'

let inMemoryPokemonsRepository: InMemoryPokemonsRepository
let inMemoryTeamsRepository: InMemoryTeamsRepository
let addPokemonToTeamUseCase: AddPokemonToTeamUseCase

describe('AddPokemonToTeam UseCase', () => {

    beforeEach(() => {
        inMemoryPokemonsRepository = new InMemoryPokemonsRepository()
        inMemoryTeamsRepository = new InMemoryTeamsRepository()
        addPokemonToTeamUseCase = new AddPokemonToTeamUseCase(
            inMemoryTeamsRepository,
            inMemoryPokemonsRepository
        )
    })

    it('should be able to add a new pokemon to the team', async () => {
        const teamId = 'teamId'

        inMemoryTeamsRepository.teamsRepository.push({
            id: teamId,
            userId: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
            pokemons: []
        })

        const team = await addPokemonToTeamUseCase.execute('pokeId', 'name', 'image', ['type'], teamId)

        expect(inMemoryTeamsRepository.teamsRepository.length).toEqual(1)
        expect(team.pokemons.length).toEqual(1)
    })

    it('should not be able to add a pokemon to the team if this pokemon is already there', async () => {
        const teamId = 'teamId'

        inMemoryTeamsRepository.teamsRepository.push({
            id: teamId,
            userId: uuidv4(),
            pokemons: [],
            createdAt: new Date(),
            updatedAt: new Date()
        })

        await addPokemonToTeamUseCase.execute('pokeId', 'name', 'image', ['type'], teamId)

        await expect(
            addPokemonToTeamUseCase.execute('pokeId', 'name', 'image', ['type'], teamId)
        ).rejects.toEqual(new AppError(ErrorMessages.pokemonAlreadyOnTeam))
    })

    it('should not be able to add a pokemon to the team if the team already has 6 pokemons', async () => {
        const teamId = 'teamId'

        inMemoryTeamsRepository.teamsRepository.push({
            id: teamId,
            userId: uuidv4(),
            pokemons: [],
            createdAt: new Date(),
            updatedAt: new Date()
        })

        await addPokemonToTeamUseCase.execute('pokeId-1', 'name', 'image', ['type'], teamId)
        await addPokemonToTeamUseCase.execute('pokeId-2', 'name', 'image', ['type'], teamId)
        await addPokemonToTeamUseCase.execute('pokeId-3', 'name', 'image', ['type'], teamId)
        await addPokemonToTeamUseCase.execute('pokeId-4', 'name', 'image', ['type'], teamId)
        await addPokemonToTeamUseCase.execute('pokeId-5', 'name', 'image', ['type'], teamId)
        await addPokemonToTeamUseCase.execute('pokeId-6', 'name', 'image', ['type'], teamId)

        await expect(
            addPokemonToTeamUseCase.execute('pokeId-X', 'name', 'image', ['type'], teamId)
        ).rejects.toEqual(new AppError(ErrorMessages.teamComplete))
    })
})