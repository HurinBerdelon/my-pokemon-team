import 'reflect-metadata'
import { InMemoryPokemonsRepository } from '../../../pokemon/repositories/inMemory/InMemoryPokemonsRepository'
import { InMemoryTeamsRepository } from '../../repositories/inMemory/inMemoryTeamsRepository'
import { AddPokemonToTeamUseCase } from '../AddPokemonToTeam/AddPokemonToTeamUseCase'
import { RemovePokemonFromTeamUseCase } from './removePokemonFromTeamUseCase'

let inMemoryPokemonsRepository: InMemoryPokemonsRepository
let inMemoryTeamsRepository: InMemoryTeamsRepository
let removePokemonFromTeamUseCase: RemovePokemonFromTeamUseCase
let addPokemonToTeamUseCase: AddPokemonToTeamUseCase //only to add a pokemon to a team before removing it, this class is not being tested

describe('Remove Pokemon From Team UseCase', () => {

    beforeEach(() => {
        inMemoryPokemonsRepository = new InMemoryPokemonsRepository()
        inMemoryTeamsRepository = new InMemoryTeamsRepository()
        addPokemonToTeamUseCase = new AddPokemonToTeamUseCase(
            inMemoryTeamsRepository,
            inMemoryPokemonsRepository
        )
        removePokemonFromTeamUseCase = new RemovePokemonFromTeamUseCase(
            inMemoryTeamsRepository,
            inMemoryPokemonsRepository,
        )
    })

    it('should be able to remove a pokemon from a team', async () => {
        const teamId = 'teamId'

        inMemoryTeamsRepository.teamsRepository.push({
            id: teamId,
            userId: 'userId',
            createdAt: new Date(),
            updatedAt: new Date(),
            pokemons: []
        })

        await addPokemonToTeamUseCase.execute('pokeId', teamId)

        const team = await removePokemonFromTeamUseCase.execute(teamId, 'pokeId')

        expect(team.pokemons.length).toEqual(0)
    })


    it('should be able to remove a pokemon from a team', async () => {
        const teamId = 'teamId'

        inMemoryTeamsRepository.teamsRepository.push({
            id: teamId,
            userId: 'userId',
            createdAt: new Date(),
            updatedAt: new Date(),
            pokemons: []
        })

        await addPokemonToTeamUseCase.execute('pokeId', teamId)
        await addPokemonToTeamUseCase.execute('pokeId-2', teamId)

        const team = await removePokemonFromTeamUseCase.execute(teamId, 'pokeId')

        expect(team.pokemons.length).toEqual(1)
        expect(team.pokemons[0].pokemon.pokeID).toEqual('pokeId-2')
    })
})