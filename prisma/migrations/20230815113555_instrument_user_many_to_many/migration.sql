/*
  Warnings:

  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Instrument` table. All the data in the column will be lost.
  - You are about to drop the column `instrumentId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_userId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "instrumentId";

-- CreateTable
CREATE TABLE "_InstrumentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InstrumentToUser_AB_unique" ON "_InstrumentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_InstrumentToUser_B_index" ON "_InstrumentToUser"("B");

-- AddForeignKey
ALTER TABLE "_InstrumentToUser" ADD CONSTRAINT "_InstrumentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Instrument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InstrumentToUser" ADD CONSTRAINT "_InstrumentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
