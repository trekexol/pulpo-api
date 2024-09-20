import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { HederaTokensService } from './hedera-tokens.service';
import { CreateTokenDto } from './dto/create-token.dto';

@Controller('hedera-tokens')
export class HederaTokensController {
  constructor(private readonly hederaTokensService: HederaTokensService) {}

  @Post('create-token')
  async createToken(@Body() createTokenDto: CreateTokenDto) {
    return this.hederaTokensService.createToken(createTokenDto);
  }

 
}