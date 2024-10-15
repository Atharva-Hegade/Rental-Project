import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { Prisma } from '@prisma/client';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create(@Body() data: Prisma.EquipmentCreateInput) {
    return this.equipmentService.create(data);
  }

  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(parseInt(id, 10));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.EquipmentUpdateInput) {
    return this.equipmentService.update(parseInt(id, 10), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(parseInt(id, 10));
  }
}
