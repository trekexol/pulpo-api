import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateTokenDto {
  @IsString()
  name: string;

  @IsString()
  symbol: string;

  @IsNumber()
  @IsPositive()
  initialSupply: number;

  @IsNumber()
  @IsPositive()
  userId: number;
}