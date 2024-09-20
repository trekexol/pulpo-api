import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth.module';

import { HederaTokensModule } from './hedera-tokens.module';
import { UserTokenModule } from './user-token.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'psy.h.filess.io',
      port: 3307,
      username: 'proba_poolreport',
      password: '89b90ee87ce6e03c1bbe420aebcabef774c140dc',
      database: 'proba_poolreport',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    AuthModule,
    HederaTokensModule,
    UserTokenModule,
  ],
})
export class AppModule {}

