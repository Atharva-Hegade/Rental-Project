import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  // Create Owner
  async createOwner(data: Prisma.OwnerCreateInput) {
    return this.prisma.owner.create({ data });
  }

  // Find Owner by Email
  async findOwnerByEmail(email: string) {
    return this.prisma.owner.findUnique({ where: { email } });
  }

  // Find Owner by ID
  async findOwnerById(id: number) {
    return this.prisma.owner.findUnique({ where: { id } });
  }

  // Update Owner by ID
  async updateOwner(id: number, data: Prisma.OwnerUpdateInput) {
    return this.prisma.owner.update({
      where: { id },
      data,
    });
  }

  // Delete Owner by ID
  async deleteOwner(id: number) {
    return this.prisma.owner.delete({ where: { id } });
  }
}
