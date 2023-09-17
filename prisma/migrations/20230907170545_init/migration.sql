/*
  Warnings:

  - You are about to drop the column `userId` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `_InstrumentToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StyleToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_userId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_userId_fkey";

-- DropForeignKey
ALTER TABLE "_InstrumentToUser" DROP CONSTRAINT "_InstrumentToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_InstrumentToUser" DROP CONSTRAINT "_InstrumentToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_StyleToUser" DROP CONSTRAINT "_StyleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_StyleToUser" DROP CONSTRAINT "_StyleToUser_B_fkey";

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "userId";

-- DropTable
DROP TABLE "_InstrumentToUser";

-- DropTable
DROP TABLE "_StyleToUser";
