import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RentalStatusHistoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RentalStatusHistoryCreateInput) {
    return this.prisma.rentalStatusHistory.create({ data });
  }

  async findAll() {
    return this.prisma.rentalStatusHistory.findMany();
  }

  async findOne(id: number) {
    return this.prisma.rentalStatusHistory.findUnique({ where: { id } });
  }
}

export class RentalstatushistoryService {}