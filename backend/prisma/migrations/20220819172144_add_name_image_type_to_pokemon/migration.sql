/*
  Warnings:

  - Added the required column `imageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "types" TEXT[];
