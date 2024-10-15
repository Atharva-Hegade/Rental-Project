import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RentalService {
  constructor(private prisma: PrismaService) {}

  async createRental(data: Prisma.RentalCreateInput) {
    return this.prisma.rental.create({ data });
  }


  async findRentalById(id: number) {
    return this.prisma.rental.findUnique({ where: { id } });
  }

  async listUserRentals(userId: number) {
    return this.prisma.rental.findMany({ where: { userId } });
  }

  // Ensure the id parameter is of type 'number'
  async updateRental(id: number, data: Prisma.RentalUpdateInput) {
    return this.prisma.rental.update({ where: { id }, data });
  }

  async deleteRental(id: number) {
    return this.prisma.rental.delete({ where: { id } });
  }
}
