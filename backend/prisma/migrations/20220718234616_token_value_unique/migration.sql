/*
  Warnings:

  - A unique constraint covering the columns `[value]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_value_key" ON "RefreshToken"("value");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
