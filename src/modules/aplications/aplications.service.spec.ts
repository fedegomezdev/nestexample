import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AplicationsService } from './aplications.service';
import { Aplication } from './models/aplication.entity';
import { AplicationRepositoryFake } from './utils/mocks/AplicationRepositoryFake';

describe('AplicationsService', () => {
  let service: AplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AplicationsService,
        {
          provide: getRepositoryToken(Aplication),
          useClass: AplicationRepositoryFake
        }
      ]
    }).compile();

    service = module.get<AplicationsService>(AplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
