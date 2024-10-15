import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Prisma } from '@prisma/client';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  async create(@Body() data: Prisma.ReviewCreateInput) {
    return this.reviewService.create(data);
  }

  @Get()
  async findAll() {
    return this.reviewService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.reviewService.findOne(id);
  }
}
