import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { Prisma } from '@prisma/client';

@Controller('discounts')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  async create(@Body() data: Prisma.DiscountCreateInput) {
    return this.discountService.create(data);
  }

  @Get()
  async findAll() {
    return this.discountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.discountService.findOne(id);
  }
}
