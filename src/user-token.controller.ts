import { Controller, Get, Param } from '@nestjs/common';
import { UserTokenService } from './user-token.service';
import { UserToken } from './user-token.entity';

@Controller('user-tokens')
export class UserTokenController {
  constructor(private readonly userTokenService: UserTokenService) {}

  @Get(':userId')
  async getUserTokens(@Param('userId') userId: number): Promise<UserToken[]> {
    return this.userTokenService.findByUserId(userId);
  }
}
