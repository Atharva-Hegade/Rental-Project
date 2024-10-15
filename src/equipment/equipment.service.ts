import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EquipmentService {
  constructor(private prisma: PrismaService) {}

  // Create new equipment
  async create(data: Prisma.EquipmentCreateInput) {
    return this.prisma.equipment.create({ data });
  }

  // Get all equipment
  async findAll() {
    return this.prisma.equipment.findMany();
  }

  // Get one equipment by ID
  async findOne(id: number) {
    return this.prisma.equipment.findUnique({ where: { id } });
  }

  // Update equipment by ID
  async update(id: number, data: Prisma.EquipmentUpdateInput) {
    return this.prisma.equipment.update({
      where: { id },
      data,
    });
  }

  // Delete equipment by ID
  async remove(id: number) {
    return this.prisma.equipment.delete({
      where: { id },
    });
  }
}
