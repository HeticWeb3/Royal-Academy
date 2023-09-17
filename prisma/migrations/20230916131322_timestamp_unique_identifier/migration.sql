/*
  Warnings:

  - A unique constraint covering the columns `[lessonId,userId]` on the table `Timestamp` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Timestamp_lessonId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Timestamp_lessonId_userId_key" ON "Timestamp"("lessonId", "userId");
