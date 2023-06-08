/*
  Warnings:

  - You are about to drop the column `utilisateurId` on the `Abonnement` table. All the data in the column will be lost.
  - You are about to drop the column `utilisateurId` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `utilisateurId` on the `Instrument` table. All the data in the column will be lost.
  - You are about to drop the column `utilisateurId` on the `UploadFileUtilsateur` table. All the data in the column will be lost.
  - You are about to drop the `Utilisateur` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Abonnement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Abonnement" DROP CONSTRAINT "Abonnement_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "UploadFileUtilsateur" DROP CONSTRAINT "UploadFileUtilsateur_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_ecoleId_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_leconId_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_rangId_fkey";

-- DropForeignKey
ALTER TABLE "Utilisateur" DROP CONSTRAINT "Utilisateur_styleId_fkey";

-- AlterTable
ALTER TABLE "Abonnement" DROP COLUMN "utilisateurId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "utilisateurId",
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "utilisateurId",
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "UploadFileUtilsateur" DROP COLUMN "utilisateurId",
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "Utilisateur";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "lastname" TEXT,
    "firstname" TEXT,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "ecoleId" INTEGER,
    "styleId" INTEGER,
    "leconId" INTEGER,
    "rangId" INTEGER,
    "dateCreation" DATE NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UploadFileUtilsateur" ADD CONSTRAINT "UploadFileUtilsateur_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_leconId_fkey" FOREIGN KEY ("leconId") REFERENCES "Lecon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rangId_fkey" FOREIGN KEY ("rangId") REFERENCES "Rang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "Ecole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abonnement" ADD CONSTRAINT "Abonnement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
