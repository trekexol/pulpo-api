import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserToken } from './user-token.entity';
import { UserTokenService } from './user-token.service';
import { UserTokenController } from './user-token.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserToken])], 
  providers: [UserTokenService],
  controllers: [UserTokenController],
})
export class UserTokenModule {}
