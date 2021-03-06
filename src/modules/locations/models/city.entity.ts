import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Country } from './country.entity';

@ObjectType()
@Entity()
export class City extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  postCode: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @ManyToOne(() => Country, {
    cascade: true,
    eager: true
  })
  country: Country;

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
