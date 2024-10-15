import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AdminCreateInput) {
    return this.prisma.admin.create({ data });
  }

  async findAll() {
    return this.prisma.admin.findMany();
  }

  async findOne(id: number) {
    const admin = await this.prisma.admin.findUnique({ where: { id } });
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found.`);
    }
    return admin;
  }

  async update(id: number, data: Prisma.AdminUpdateInput) {
    return this.prisma.admin.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.prisma.admin.delete({ where: { id } });
  }
}
