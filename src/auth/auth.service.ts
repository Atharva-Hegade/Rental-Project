import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/database.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Check if the user exists and the passwords match
    if (user && user.password === password) {
      return user; // You might want to hash passwords for security
    }

    return null;
  }
}
