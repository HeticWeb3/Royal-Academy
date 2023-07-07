-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_instrumentId_fkey";

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
