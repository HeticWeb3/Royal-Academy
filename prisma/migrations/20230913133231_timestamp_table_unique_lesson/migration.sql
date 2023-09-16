/*
  Warnings:

  - A unique constraint covering the columns `[lessonId]` on the table `Timestamp` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Timestamp_lessonId_key" ON "Timestamp"("lessonId");
