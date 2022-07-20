/*
  Warnings:

  - The primary key for the `PokemonOnTeams` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "PokemonOnTeams" DROP CONSTRAINT "PokemonOnTeams_pkey";
