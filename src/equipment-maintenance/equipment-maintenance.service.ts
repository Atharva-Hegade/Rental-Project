import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EquipmentMaintenanceService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EquipmentMaintenanceCreateInput) {
    return this.prisma.equipmentMaintenance.create({ data });
  }

  async findAll() {
    return this.prisma.equipmentMaintenance.findMany();
  }

  async findOne(id: number) {
    return this.prisma.equipmentMaintenance.findUnique({ where: { id } });
  }
}
