import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_token')
export class UserToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  tokenId: string;

}
