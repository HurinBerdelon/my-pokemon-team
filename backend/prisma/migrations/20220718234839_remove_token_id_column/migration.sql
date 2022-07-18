/*
  Warnings:

  - You are about to drop the column `id` on the `RefreshToken` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "RefreshToken_id_key";

-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "id";
