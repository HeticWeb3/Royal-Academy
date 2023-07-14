/*
  Warnings:

  - You are about to drop the column `userId` on the `Instrument` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_userId_fkey";

-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "instrumentId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE SET NULL ON UPDATE CASCADE;
