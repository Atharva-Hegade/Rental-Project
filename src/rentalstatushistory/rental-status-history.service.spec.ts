import { Test, TestingModule } from '@nestjs/testing';
import { RentalstatushistoryService } from './rental-status-history.service';

describe('RecrystallisationService', () => {
  let service: RentalstatushistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalstatushistoryService],
    }).compile();

    service = module.get<RentalstatushistoryService>(
      RentalstatushistoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
