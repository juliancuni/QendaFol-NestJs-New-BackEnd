import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/ormconfig';
import { OldCeshtjetModule } from './resources/old-ceshtjet/old-ceshtjet.module';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { CeshtjetModule } from './resources/ceshtjet/ceshtjet.module';
import { PersonatModule } from './resources/personat/personat.module';
import { KategoriteModule } from './resources/kategorite/kategorite.module';
import { KomentiModule } from './resources/komenti/komenti.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ormConfig()),
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'qendrafol',
      clientId: 'qendrafol-api',
      secret: 'bca0a105-e14f-4d6b-846d-9240feac13fb',
      logLevels: [process.env.NODE_ENV === 'development' ? 'debug' : 'error'],
    }),
    OldCeshtjetModule,
    CeshtjetModule,
    PersonatModule,
    KategoriteModule,
    KomentiModule,
  ],
  controllers: [],
  providers: [
    // This adds a global level authentication guard,
    // you can also have it scoped
    // if you like.
    //
    // Will return a 401 unauthorized when it is unable to
    // verify the JWT token or Bearer header is missing.
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and
    // methods with @Scopes
    // are handled by this guard.
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the
    // optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
