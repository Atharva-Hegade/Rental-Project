// src/auth/auth.controller.ts
import { Controller, Post, Body, Req, UseGuards, Get , UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Login route: Authenticate and create session
  @Post('/login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return {
      message: 'Login successful',
      user, // Contains the authenticated user details
    };
  }

  // Example of a protected route that requires the user to be logged in
  @Get('/profile')
  @UseGuards(AuthGuard('session'))
  async getProfile(@Req() req: Request) {
    return {
      message: 'Access to profile',
      user: req.user,
    };
  }

  // Logout route: Invalidate session
  @Post('/logout')
  async logout(@Req() req: Request) {
    req.logout((err) => {
      if (err) {
        throw err;
      }
    });
    return { message: 'Logout successful' };
  }
}
