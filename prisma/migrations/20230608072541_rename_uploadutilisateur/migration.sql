/*
  Warnings:

  - You are about to drop the `UploadFileUtilsateur` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UploadFileUtilsateur" DROP CONSTRAINT "UploadFileUtilsateur_userId_fkey";

-- DropTable
DROP TABLE "UploadFileUtilsateur";

-- CreateTable
CREATE TABLE "UploadFileUser" (
    "id" SERIAL NOT NULL,
    "url" TEXT,
    "userId" INTEGER,

    CONSTRAINT "UploadFileUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UploadFileUser" ADD CONSTRAINT "UploadFileUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
