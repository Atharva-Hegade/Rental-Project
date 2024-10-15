import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserActivityService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserActivityCreateInput) {
    return this.prisma.userActivity.create({ data });
  }

  async findAll() {
    return this.prisma.userActivity.findMany();
  }

  async findOne(id: number) {
    return this.prisma.userActivity.findUnique({ where: { id } });
  }
}
