// src/prisma/prisma.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from './database.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Ensure PrismaService is exported
})
export class PrismaModule {}
