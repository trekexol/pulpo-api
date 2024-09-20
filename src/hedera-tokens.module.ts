import { Module } from '@nestjs/common';
import { HederaTokensController } from './hedera-tokens.controller';
import { HederaTokensService } from './hedera-tokens.service';

@Module({
  controllers: [HederaTokensController],
  providers: [HederaTokensService],
})
export class HederaTokensModule {}