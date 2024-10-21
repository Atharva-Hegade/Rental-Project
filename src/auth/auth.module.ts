// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service'; // Ensure this is present
import { PrismaModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';

@Module({
  imports: [PassportModule, UserModule, PrismaModule], // Add DatabaseModule here
  controllers: [AuthController],
  providers: [AuthService, UserService], // Ensure AuthService is included here
})
export class AuthModule {}
