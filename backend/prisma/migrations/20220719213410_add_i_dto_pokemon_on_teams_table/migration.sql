/*
  Warnings:

  - The required column `id` was added to the `PokemonOnTeams` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "PokemonOnTeams_pokemonId_key";

-- DropIndex
DROP INDEX "PokemonOnTeams_teamId_key";

-- AlterTable
ALTER TABLE "PokemonOnTeams" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "PokemonOnTeams_pkey" PRIMARY KEY ("id");
