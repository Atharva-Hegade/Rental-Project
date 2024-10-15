import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(data: Prisma.TransactionCreateInput) {
    return this.prisma.transaction.create({ data });
  }

  async findAll() {
    return this.prisma.transaction.findMany();
  }

  async findOne(id: number) {
    return this.prisma.transaction.findUnique({ where: { id } });
  }

  async updateTransaction(id: number, data: Prisma.TransactionUpdateInput) {
    return this.prisma.transaction.update({
      where: { id },
      data,
    });
  }

  async removeTransaction(id: number) {
    return this.prisma.transaction.delete({ where: { id } });
  }
}
