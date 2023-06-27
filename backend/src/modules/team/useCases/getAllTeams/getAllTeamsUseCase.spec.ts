import 'reflect-metadata'
import { InMemoryTeamsRepository } from '../../repositories/inMemory/inMemoryTeamsRepository'
import { GetAllTeamsUseCase } from './getAllTeamsUseCase'

let inMemoryTeamsRepository: InMemoryTeamsRepository
let getAllTeamsUseCase: GetAllTeamsUseCase

describe('Get All Teams UseCase', () => {

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository()
        getAllTeamsUseCase = new GetAllTeamsUseCase(inMemoryTeamsRepository)

        inMemoryTeamsRepository.teamsRepository.push({
            id: 'teamId',
            userId: 'userId',
            createdAt: new Date(),
            updatedAt: new Date(),
            pokemons: []
        })
    })

    it('should be able to list all teams', async () => {
        const teams = await getAllTeamsUseCase.execute()

        expect(teams.length).toEqual(1)
    })
})