import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ReviewCreateInput) {
    return this.prisma.review.create({ data });
  }

  async findAll() {
    return this.prisma.review.findMany();
  }

  async findOne(id: number) {
    return this.prisma.review.findUnique({ where: { id } });
  }
}
