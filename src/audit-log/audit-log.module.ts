import { Module } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { AuditLogController } from './audit-log.controller';
import { PrismaService } from '../database/database.service';


@Module({
  controllers: [AuditLogController],
  providers: [AuditLogService, PrismaService],
})
export class AuditLogModule {}
