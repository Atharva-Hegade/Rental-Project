import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { PrismaService } from '../database/database.service';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService, PrismaService],
  exports: [OwnerService],  // Export if other modules need OwnerService
})
export class OwnerModule {}
