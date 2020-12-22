import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from '../../locations/models/city.entity';
import { Client } from '../../clients/models/client.entity';

@ObjectType()
@Entity()
export class Ecommerce extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @ManyToOne(() => City, {
    cascade: true,
    eager: true
  })
  city: City;

  @Field()
  @ManyToOne(() => Client, {
    cascade: true,
    eager: true
  })
  client: Client;

  @Field()
  @Column()
  web: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
