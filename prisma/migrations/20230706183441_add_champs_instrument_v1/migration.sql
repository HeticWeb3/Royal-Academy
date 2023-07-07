/*
  Warnings:

  - You are about to drop the `_InstrumentToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InstrumentToUser" DROP CONSTRAINT "_InstrumentToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_InstrumentToUser" DROP CONSTRAINT "_InstrumentToUser_B_fkey";

-- AlterTable
ALTER TABLE "Instrument" ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "_InstrumentToUser";

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
