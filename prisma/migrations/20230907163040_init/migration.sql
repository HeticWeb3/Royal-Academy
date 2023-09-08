-- CreateTable
CREATE TABLE "InstrumentOnUser" (
    "instrumentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "InstrumentOnUser_pkey" PRIMARY KEY ("userId","instrumentId")
);

-- AddForeignKey
ALTER TABLE "InstrumentOnUser" ADD CONSTRAINT "InstrumentOnUser_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "Instrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstrumentOnUser" ADD CONSTRAINT "InstrumentOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
