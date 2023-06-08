/*
  Warnings:

  - You are about to drop the column `coursId` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `leconId` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `niveauId` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Instrument` table. All the data in the column will be lost.
  - You are about to drop the column `professeurId` on the `Instrument` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Style` table. All the data in the column will be lost.
  - You are about to drop the column `professeurId` on the `Style` table. All the data in the column will be lost.
  - You are about to drop the column `ecoleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `leconId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `rangId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `leconId` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `Abonnement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AbonnementPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Concours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ecole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IconeBadge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lecon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeconFile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Niveau` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professeur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rang` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseId` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lessonId` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `levelId` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lessonId` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Abonnement" DROP CONSTRAINT "Abonnement_abonnementPlanId_fkey";

-- DropForeignKey
ALTER TABLE "Abonnement" DROP CONSTRAINT "Abonnement_userId_fkey";

-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_coursId_fkey";

-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_leconId_fkey";

-- DropForeignKey
ALTER TABLE "Badge" DROP CONSTRAINT "Badge_niveauId_fkey";

-- DropForeignKey
ALTER TABLE "Concours" DROP CONSTRAINT "Concours_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "Concours" DROP CONSTRAINT "Concours_niveauId_fkey";

-- DropForeignKey
ALTER TABLE "Concours" DROP CONSTRAINT "Concours_styleId_fkey";

-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_instrumentId_fkey";

-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_niveauId_fkey";

-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_professeurId_fkey";

-- DropForeignKey
ALTER TABLE "Cours" DROP CONSTRAINT "Cours_styleId_fkey";

-- DropForeignKey
ALTER TABLE "IconeBadge" DROP CONSTRAINT "IconeBadge_badgeId_fkey";

-- DropForeignKey
ALTER TABLE "Instrument" DROP CONSTRAINT "Instrument_professeurId_fkey";

-- DropForeignKey
ALTER TABLE "Lecon" DROP CONSTRAINT "Lecon_coursId_fkey";

-- DropForeignKey
ALTER TABLE "LeconFile" DROP CONSTRAINT "LeconFile_leconId_fkey";

-- DropForeignKey
ALTER TABLE "Niveau" DROP CONSTRAINT "Niveau_leconId_fkey";

-- DropForeignKey
ALTER TABLE "Rang" DROP CONSTRAINT "Rang_ecoleId_fkey";

-- DropForeignKey
ALTER TABLE "Rang" DROP CONSTRAINT "Rang_styleId_fkey";

-- DropForeignKey
ALTER TABLE "Style" DROP CONSTRAINT "Style_professeurId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ecoleId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_leconId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rangId_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_leconId_fkey";

-- AlterTable
ALTER TABLE "Badge" DROP COLUMN "coursId",
DROP COLUMN "leconId",
DROP COLUMN "niveauId",
DROP COLUMN "nom",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "lessonId" INTEGER NOT NULL,
ADD COLUMN     "levelId" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "Instrument" DROP COLUMN "nom",
DROP COLUMN "professeurId",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "teacherId" INTEGER;

-- AlterTable
ALTER TABLE "Style" DROP COLUMN "nom",
DROP COLUMN "professeurId",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "teacherId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "ecoleId",
DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "leconId",
DROP COLUMN "rangId",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "lessonId" INTEGER,
ADD COLUMN     "rankId" INTEGER,
ADD COLUMN     "schoolId" INTEGER;

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "leconId",
ADD COLUMN     "lessonId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Abonnement";

-- DropTable
DROP TABLE "AbonnementPlan";

-- DropTable
DROP TABLE "Concours";

-- DropTable
DROP TABLE "Cours";

-- DropTable
DROP TABLE "Ecole";

-- DropTable
DROP TABLE "IconeBadge";

-- DropTable
DROP TABLE "Lecon";

-- DropTable
DROP TABLE "LeconFile";

-- DropTable
DROP TABLE "Niveau";

-- DropTable
DROP TABLE "Professeur";

-- DropTable
DROP TABLE "Rang";

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "lastName" TEXT,
    "firstName" TEXT,
    "description" TEXT,
    "school" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "titleWin" TEXT,
    "diploma" TEXT,
    "photo" TEXT[],
    "career" TEXT,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" SERIAL NOT NULL,
    "place" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "ecoleId" INTEGER NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonFile" (
    "id" SERIAL NOT NULL,
    "file" TEXT[],
    "lessonId" INTEGER NOT NULL,

    CONSTRAINT "LessonFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "description" TEXT,
    "courseId" INTEGER,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "levelId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IconBadge" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "badgeId" INTEGER NOT NULL,

    CONSTRAINT "IconBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "subscriptionPlanId" INTEGER NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionPlan" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "plan" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubscriptionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "localisation" TEXT NOT NULL,
    "priceEnter" INTEGER NOT NULL,
    "priceWin" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "instrumentId" INTEGER NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Style" ADD CONSTRAINT "Style_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_ecoleId_fkey" FOREIGN KEY ("ecoleId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Level" ADD CONSTRAINT "Level_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonFile" ADD CONSTRAINT "LessonFile_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instrument" ADD CONSTRAINT "Instrument_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Badge" ADD CONSTRAINT "Badge_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IconBadge" ADD CONSTRAINT "IconBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_subscriptionPlanId_fkey" FOREIGN KEY ("subscriptionPlanId") REFERENCES "SubscriptionPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
