import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RentalStatusHistoryService } from './rental-status-history.service';
import { Prisma } from '@prisma/client';

@Controller('rental-status-history')
export class RentalStatusHistoryController {
  constructor(private readonly rentalStatusHistoryService: RentalStatusHistoryService) {}

  @Post()
  async create(@Body() data: Prisma.RentalStatusHistoryCreateInput) {
    return this.rentalStatusHistoryService.create(data);
  }

  @Get()
  async findAll() {
    return this.rentalStatusHistoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.rentalStatusHistoryService.findOne(id);
  }
}
