-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "rankId" INTEGER;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE SET NULL ON UPDATE CASCADE;
