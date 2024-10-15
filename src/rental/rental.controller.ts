import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RentalService } from './rental.service';
import { Prisma } from '@prisma/client';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  // Create a new Rental using Prisma's RentalCreateInput type
  @Post()
  createRental(@Body() data: Prisma.RentalCreateInput) {
    return this.rentalService.createRental(data);
  }


  // Get Rental by ID
  @Get(':id')
  findRentalById(@Param('id') id: string) {
    return this.rentalService.findRentalById(parseInt(id, 10)); // id is parsed to a number
  }

  // List Rentals for a specific User
  @Get('user/:userId')
  listUserRentals(@Param('userId') userId: string) {
    return this.rentalService.listUserRentals(parseInt(userId, 10)); // userId is parsed to a number
  }

  // Update Rental Status
  @Patch(':id/status')
  updateRentalStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.rentalService.updateRental(parseInt(id, 10), { status }); // Ensure correct method usage
  }

  // Update Rental using Prisma's RentalUpdateInput type
  @Patch(':id')
  updateRental(@Param('id') id: string, @Body() rentalData: Prisma.RentalUpdateInput) {
    return this.rentalService.updateRental(parseInt(id, 10), rentalData); // Ensure correct method usage
  }

  // Delete Rental by ID
  @Delete(':id')
  deleteRental(@Param('id') id: string) {
    return this.rentalService.deleteRental(parseInt(id, 10)); // id is parsed to a number
  }
}
