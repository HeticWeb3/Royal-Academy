/*
  Warnings:

  - You are about to drop the column `nom` on the `Lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "nom",
ADD COLUMN     "name" TEXT;
