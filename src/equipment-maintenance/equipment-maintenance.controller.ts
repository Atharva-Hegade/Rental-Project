import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EquipmentMaintenanceService } from './equipment-maintenance.service';
import { Prisma } from '@prisma/client';

@Controller('equipment-maintenance')
export class EquipmentMaintenanceController {
  constructor(private readonly equipmentMaintenanceService: EquipmentMaintenanceService) {}

  @Post()
  async create(@Body() data: Prisma.EquipmentMaintenanceCreateInput) {
    return this.equipmentMaintenanceService.create(data);
  }

  @Get()
  async findAll() {
    return this.equipmentMaintenanceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.equipmentMaintenanceService.findOne(id);
  }
}
