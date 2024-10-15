import { Module } from '@nestjs/common';
import { EquipmentMaintenanceService } from './equipment-maintenance.service';
import { EquipmentMaintenanceController } from './equipment-maintenance.controller';
import { PrismaService } from '../database/database.service';

@Module({
  controllers: [EquipmentMaintenanceController],
  providers: [EquipmentMaintenanceService , PrismaService],
})
export class EquipmentMaintenanceModule {}
