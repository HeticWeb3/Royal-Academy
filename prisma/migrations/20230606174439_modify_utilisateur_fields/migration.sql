-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_leconId_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_rangId_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_styleId_fkey";

-- AlterTable
ALTER TABLE "Utilisateur" ALTER COLUMN "styleId" DROP NOT NULL,
ALTER COLUMN "leconId" DROP NOT NULL,
ALTER COLUMN "rangId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilisateur" ADD CONSTRAINT "Utilisateur_rangId_fkey" FOREIGN KEY ("rangId") REFERENCES "Rang"("id") ON DELETE SET NULL ON UPDATE CASCADE;
