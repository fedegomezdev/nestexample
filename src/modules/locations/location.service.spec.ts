import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { LocationService } from './location.service';
import { City } from './models/city.entity';
import { Country } from './models/country.entity';
import { Province } from './models/province.entity';
import { LocationRepositoryFake } from './utils/mocks/LocationRepositoryFake';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
        {
          provide: getRepositoryToken(City),
          useClass: LocationRepositoryFake
        },
        {
          provide: getRepositoryToken(Country),
          useClass: LocationRepositoryFake
        },
        {
          provide: getRepositoryToken(Province),
          useClass: LocationRepositoryFake
        }
      ]
    }).compile();

    service = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
