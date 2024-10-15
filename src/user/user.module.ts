import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../database/database.service';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService , AuthService],
  exports: [UserService],  // Export if other modules need UserService
})
export class UserModule {}
