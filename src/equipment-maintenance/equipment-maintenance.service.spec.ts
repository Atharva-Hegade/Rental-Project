import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentMaintenanceService } from './equipment-maintenance.service';

describe('EquipmentMaintenanceService', () => {
  let service: EquipmentMaintenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquipmentMaintenanceService],
    }).compile();

    service = module.get<EquipmentMaintenanceService>(EquipmentMaintenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
