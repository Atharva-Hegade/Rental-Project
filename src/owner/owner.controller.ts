import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OwnerService } from './owner.service';

@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  createOwner(@Body() ownerData: Prisma.OwnerCreateInput) {
    return this.ownerService.createOwner(ownerData);
  }

  @Get(':email')
  findOwnerByEmail(@Param('email') email: string) {
    return this.ownerService.findOwnerByEmail(email);
  }

  @Get('id/:id')
  findOwnerById(@Param('id') id: string) {
    return this.ownerService.findOwnerById(parseInt(id, 10));
  }

  @Patch(':id')
  updateOwner(@Param('id') id: string, @Body() ownerData: Prisma.OwnerUpdateInput) {
    return this.ownerService.updateOwner(parseInt(id, 10), ownerData);
  }

  @Delete(':id')
  deleteOwner(@Param('id') id: string) {
    return this.ownerService.deleteOwner(parseInt(id, 10));
  }
}
