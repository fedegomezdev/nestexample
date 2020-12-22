import { Module } from '@nestjs/common';
import { ClientResolver } from './clients.resolver';
import { ClientsService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './models/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientsService, ClientResolver]
})
export class ClientsModule {}
