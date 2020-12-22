import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Aplication } from '../aplications/models/aplication.entity';
import { AplicationRepositoryFake } from '../aplications/utils/mocks/AplicationRepositoryFake';
import { Permission } from './models/permission.entity';
import { PermissionsService } from './permissions.service';
import { PermissionRepositoryFake } from './utils/mocks/PermissionRepositoryFake';

describe('PermissionsService', () => {
  let service: PermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PermissionsService,
        {
          provide: getRepositoryToken(Permission),
          useClass: PermissionRepositoryFake
        },
        {
          provide: getRepositoryToken(Aplication),
          useClass: AplicationRepositoryFake
        }
      ]
    }).compile();

    service = module.get<PermissionsService>(PermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
