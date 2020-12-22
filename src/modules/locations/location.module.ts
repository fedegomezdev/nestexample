import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './models/country.entity';
import { City } from './models/city.entity';
import { LocationResolver } from './location.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Country, City])],
  providers: [LocationService, LocationResolver],
  exports: [TypeOrmModule]
})
export class LocationModule {}
