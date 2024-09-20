import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserToken } from './user-token.entity'; // Asegúrate de tener tu entidad definida

@Injectable()
export class UserTokenService {
  constructor(
    @InjectRepository(UserToken)
    private userTokenRepository: Repository<UserToken>,
  ) {}

  async findByUserId(userId: number): Promise<UserToken[]> {
    return this.userTokenRepository.find({ where: { userId } });
  }
  
}
