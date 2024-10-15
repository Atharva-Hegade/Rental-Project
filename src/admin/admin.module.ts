import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaService } from '../database/database.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService , PrismaService],
})
export class AdminModule {}
