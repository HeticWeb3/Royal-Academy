/*
  Warnings:

  - You are about to drop the column `teacherId` on the `Instrument` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Style` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "Style" DROP CONSTRAINT "Style_teacherId_fkey";

-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "teacherId";

-- AlterTable
ALTER TABLE "Style" DROP COLUMN "teacherId";
