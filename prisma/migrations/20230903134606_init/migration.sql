/*
  Warnings:

  - You are about to drop the column `name` on the `Lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "name",
ADD COLUMN     "nom" TEXT;
