/*
  Warnings:

  - A unique constraint covering the columns `[teamId]` on the table `PokemonOnTeams` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pokemonId]` on the table `PokemonOnTeams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PokemonOnTeams_teamId_key" ON "PokemonOnTeams"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonOnTeams_pokemonId_key" ON "PokemonOnTeams"("pokemonId");
