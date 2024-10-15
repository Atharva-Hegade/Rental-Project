import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EquipmentModule } from './equipment/equipment.module'; // Import your equipment module
import { AppController } from './app.controller';
import { OwnerModule } from './owner/owner.module';
import { RentalModule } from './rental/rental.module';
import { AuditLogModule } from './audit-log/audit-log.module';
import { TransactionModule } from './transaction/transaction.module';
import { RentalStatusHistoryModule} from "./rentalstatushistory/rental-status-history.module";
import { EquipmentMaintenanceModule } from './equipment-maintenance/equipment-maintenance.module';
import { ReviewModule } from './review/review.module';
import { DiscountModule } from './discount/discount.module';
import { AdminModule } from './admin/admin.module';
import { UserActivityModule } from './user-activity/user-activity.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    EquipmentModule,
    OwnerModule,
    RentalModule,
    AuditLogModule,
    TransactionModule,
    RentalStatusHistoryModule,
    EquipmentMaintenanceModule,
    ReviewModule,
    DiscountModule,
    AdminModule,
    UserActivityModule,
    AuthModule,
  ], // Add EquipmentModule here

  controllers: [AppController],
})
export class AppModule {}
