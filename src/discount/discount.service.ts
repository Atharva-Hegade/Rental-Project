import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DiscountService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DiscountCreateInput) {
    return this.prisma.discount.create({ data });
  }

  async findAll() {
    return this.prisma.discount.findMany();
  }

  async findOne(id: number) {
    return this.prisma.discount.findUnique({ where: { id } });
  }
}
