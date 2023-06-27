-- DropForeignKey
ALTER TABLE "PokemonOnTeams" DROP CONSTRAINT "PokemonOnTeams_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "PokemonOnTeams" DROP CONSTRAINT "PokemonOnTeams_teamId_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_userId_fkey";

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonOnTeams" ADD CONSTRAINT "PokemonOnTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonOnTeams" ADD CONSTRAINT "PokemonOnTeams_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
