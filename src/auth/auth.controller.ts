import { Controller, Post, Get, Body, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { LocalAuthGuard } from './local.strategy';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() data: Prisma.UserCreateInput) {
    return this.authService.register(data);
  }

  // Add GET route for login
  @Get('login')
  @UseGuards(LocalAuthGuard) // Ensure this guard is used to authenticate
  async login(@Req() req: Request, @Res() res: Response) {
    // Handle login success
    res.status(200).json({
      message: 'Login successful',
      user: req.user, // req.user will contain the authenticated user details after the guard runs
    });
  }
}
