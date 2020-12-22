import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LocationService } from '../locations/location.service';
import { City } from '../locations/models/city.entity';
import { LocationRepositoryFake } from '../locations/utils/mocks/LocationRepositoryFake';
import { EcommercesService } from './ecommerces.service';
import { Ecommerce } from './models/ecommerce.entity';
import { EcommerceRepositoryFake } from './utils/mocks/EcommerceRepositoryFake';

describe('EcommercesService', () => {
  let service: EcommercesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EcommercesService,
        {
          provide: getRepositoryToken(Ecommerce),
          useClass: EcommerceRepositoryFake
        }
      ]
    }).compile();

    service = module.get<EcommercesService>(EcommercesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
