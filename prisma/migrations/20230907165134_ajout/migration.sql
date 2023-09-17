-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_styleId_fkey";

-- CreateTable
CREATE TABLE "CourseOnUser" (
    "courseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CourseOnUser_pkey" PRIMARY KEY ("userId","courseId")
);

-- CreateTable
CREATE TABLE "StyleOnUser" (
    "styleId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "StyleOnUser_pkey" PRIMARY KEY ("userId","styleId")
);

-- CreateTable
CREATE TABLE "BadgeOnUser" (
    "badgeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BadgeOnUser_pkey" PRIMARY KEY ("userId","badgeId")
);

-- CreateTable
CREATE TABLE "InstrumentOnTeacher" (
    "instrumentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "InstrumentOnTeacher_pkey" PRIMARY KEY ("teacherId","instrumentId")
);

-- CreateTable
CREATE TABLE "StyleOnTeacher" (
    "styleId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,

    CONSTRAINT "StyleOnTeacher_pkey" PRIMARY KEY ("teacherId","styleId")
);

-- CreateTable
CREATE TABLE "_StyleToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StyleToUser_AB_unique" ON "_StyleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_StyleToUser_B_index" ON "_StyleToUser"("B");

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseOnUser" ADD CONSTRAINT "CourseOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleOnUser" ADD CONSTRAINT "StyleOnUser_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleOnUser" ADD CONSTRAINT "StyleOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BadgeOnUser" ADD CONSTRAINT "BadgeOnUser_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BadgeOnUser" ADD CONSTRAINT "BadgeOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstrumentOnTeacher" ADD CONSTRAINT "InstrumentOnTeacher_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstrumentOnTeacher" ADD CONSTRAINT "InstrumentOnTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleOnTeacher" ADD CONSTRAINT "StyleOnTeacher_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES "Style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StyleOnTeacher" ADD CONSTRAINT "StyleOnTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StyleToUser" ADD CONSTRAINT "_StyleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Style"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StyleToUser" ADD CONSTRAINT "_StyleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
