/*
  Warnings:

  - You are about to drop the column `teacherId` on the `Course` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_teacherId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "teacherId";

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CourseOnTeacher" (
    "courseId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "CourseOnTeacher_pkey" PRIMARY KEY ("teacherId","courseId")
);

-- AddForeignKey
ALTER TABLE "CourseOnTeacher" ADD CONSTRAINT "CourseOnTeacher_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnTeacher" ADD CONSTRAINT "CourseOnTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
