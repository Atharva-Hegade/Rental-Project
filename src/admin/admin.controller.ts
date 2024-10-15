import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Prisma } from '@prisma/client';
import { Roles } from '../roles/roles.decorator'; // Import the Roles decorator
import { RolesGuard } from '../roles/roles.guard'; // Import the RolesGuard

@Controller('admins')
@UseGuards(RolesGuard) // Apply the RolesGuard to this controller
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @Roles('superadmin') // Only accessible by users with 'superadmin' role
  async create(@Body() data: Prisma.AdminCreateInput) {
    return this.adminService.create(data);
  }

  @Get()
  @Roles('admin') // Only accessible by users with 'admin' role
  async findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  @Roles('admin') // Only accessible by users with 'admin' role
  async findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }
}
