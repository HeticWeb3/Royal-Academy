-- CreateTable
CREATE TABLE "Timestamp" (
    "id" SERIAL NOT NULL,
    "timestamp" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Timestamp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Timestamp" ADD CONSTRAINT "Timestamp_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timestamp" ADD CONSTRAINT "Timestamp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
