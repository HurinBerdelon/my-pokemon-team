import { inject, injectable } from 'tsyringe';
import { ITeamRepository, TeamResponse } from '../../repositories/ITeamRepository';

@injectable()
export class GetAllTeamsUseCase {
    constructor(
        @inject('TeamsRepository')
        private teamsRepository: ITeamRepository
    ) { }

    async execute(): Promise<TeamResponse[]> {

        const teams = await this.teamsRepository.getAllTeams()

        return teams
    }
}