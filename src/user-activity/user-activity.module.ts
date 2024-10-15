import { Module } from '@nestjs/common';
import { UserActivityService } from './user-activity.service';
import { UserActivityController } from './user-activity.controller';
import { PrismaService } from '../database/database.service';

@Module({
  controllers: [UserActivityController],
  providers: [UserActivityService , PrismaService],
})
export class UserActivityModule {}
