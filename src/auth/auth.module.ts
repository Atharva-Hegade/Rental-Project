// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { PrismaService } from '../database/database.service'; // Assuming you have PrismaService in a database module

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer, UserService, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
