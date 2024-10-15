import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { AuditLog } from '@prisma/client';

@Controller('audit-logs')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  async create(@Body() data: {
    entityType: string;
    entityId: number;
    action: string;
    timestamp?: Date;
    changedBy: number;
    previousValue: string;
    newValue: string;
  }) {
    return this.auditLogService.createAuditLog(data);
  }


  @Get()
  async findAll() {
    return this.auditLogService.getAllAuditLogs();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.auditLogService.getAuditLogById(id);
  }
}