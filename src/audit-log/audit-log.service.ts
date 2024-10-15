import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/database.service';
import { AuditLog } from '@prisma/client';

@Injectable()
export class AuditLogService {
  constructor(private prisma: PrismaService) {}

  async createAuditLog(data: {
    entityType: string;
    entityId: number;
    action: string;
    timestamp?: Date; // Optional since it defaults to now()
    changedBy: number;
    previousValue: string;
    newValue: string;
  }) {

  }

  async getAllAuditLogs() {
    return this.prisma.auditLog.findMany({
      orderBy: {
        timestamp: 'desc', // Order logs by timestamp
      },
    });
  }

  async getAuditLogById(id: number) {
    return this.prisma.auditLog.findUnique({
      where: { id },
    });
  }
}
