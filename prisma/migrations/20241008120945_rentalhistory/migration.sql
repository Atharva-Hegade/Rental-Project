-- CreateTable
CREATE TABLE "RentalStatusHistory" (
    "id" SERIAL NOT NULL,
    "rentalId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "changedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedBy" TEXT NOT NULL,

    CONSTRAINT "RentalStatusHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RentalStatusHistory" ADD CONSTRAINT "RentalStatusHistory_rentalId_fkey" FOREIGN KEY ("rentalId") REFERENCES "Rental"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
