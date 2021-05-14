import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/ormconfig';
import { OldCeshtjetModule } from './resources/old-ceshtjet/old-ceshtjet.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ormConfig()),
    OldCeshtjetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
