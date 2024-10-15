// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service'; // Prisma service for DB operations
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async getUserByEmail(email: string) {
    if (!email) {
      throw new Error('Email is required');
    }

    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id: parseInt(id, 10) },
      data,
    });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id: parseInt(id, 10) } });
  }
}
