import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';
import { Prisma } from '@prisma/client';

@Controller('user-activities')
export class UserActivityController {
  constructor(private readonly userActivityService: UserActivityService) {}

  @Post()
  async create(@Body() data: Prisma.UserActivityCreateInput) {
    return this.userActivityService.create(data);
  }

  @Get()
  async findAll() {
    return this.userActivityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userActivityService.findOne(id);
  }
}
