/*
  Warnings:

  - You are about to drop the `_PokemonToTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PokemonToTeam" DROP CONSTRAINT "_PokemonToTeam_A_fkey";

-- DropForeignKey
ALTER TABLE "_PokemonToTeam" DROP CONSTRAINT "_PokemonToTeam_B_fkey";

-- DropTable
DROP TABLE "_PokemonToTeam";

-- CreateTable
CREATE TABLE "PokemonOnTeams" (
    "teamId" TEXT NOT NULL,
    "pokemonId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PokemonOnTeams_pkey" PRIMARY KEY ("teamId","pokemonId")
);

-- AddForeignKey
ALTER TABLE "PokemonOnTeams" ADD CONSTRAINT "PokemonOnTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonOnTeams" ADD CONSTRAINT "PokemonOnTeams_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
