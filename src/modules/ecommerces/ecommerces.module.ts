import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from '../locations/location.module';
import { LocationService } from '../locations/location.service';
import { EcommerceResolver } from './ecommerces.resolver';
import { EcommercesService } from './ecommerces.service';
import { Ecommerce } from './models/ecommerce.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Ecommerce]), LocationModule],
  providers: [EcommercesService, EcommerceResolver]
})
export class EcommercesModule {}
