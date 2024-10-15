import { Module } from '@nestjs/common';
import { RentalStatusHistoryService } from './rental-status-history.service';
import { RentalStatusHistoryController } from './rental-status-history.controller';
import { PrismaService } from '../database/database.service';


@Module({
  
  controllers: [RentalStatusHistoryController],
  providers: [RentalStatusHistoryService , PrismaService],
})
export class RentalStatusHistoryModule {}
