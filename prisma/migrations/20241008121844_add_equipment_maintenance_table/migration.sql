-- CreateTable
CREATE TABLE "EquipmentMaintenance" (
    "id" SERIAL NOT NULL,
    "equipmentId" INTEGER NOT NULL,
    "maintenanceDate" TIMESTAMP(3) NOT NULL,
    "maintenanceType" TEXT NOT NULL,
    "notes" TEXT,
    "cost" DOUBLE PRECISION,
    "performedBy" TEXT NOT NULL,

    CONSTRAINT "EquipmentMaintenance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EquipmentMaintenance" ADD CONSTRAINT "EquipmentMaintenance_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "Equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
