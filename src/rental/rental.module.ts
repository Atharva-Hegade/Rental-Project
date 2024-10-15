import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { PrismaService } from '../database/database.service';

@Module({
  controllers: [RentalController],
  providers: [RentalService, PrismaService],
  exports: [RentalService],  // Export if other modules need RentalService
})
export class RentalModule {}

