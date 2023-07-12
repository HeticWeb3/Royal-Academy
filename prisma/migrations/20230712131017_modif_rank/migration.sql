-- DropForeignKey
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_ecoleId_fkey";

-- DropForeignKey
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_styleId_fkey";

-- AlterTable
ALTER TABLE "Rank" ALTER COLUMN "styleId" DROP NOT NULL,
ALTER COLUMN "ecoleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;
