import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Prisma } from '@prisma/client';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() data: Prisma.TransactionCreateInput) {
    return this.transactionService.createTransaction(data);
  }

  @Get()
  async findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.transactionService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Prisma.TransactionUpdateInput) {
    return this.transactionService.updateTransaction(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.transactionService.removeTransaction(id);
  }
}
