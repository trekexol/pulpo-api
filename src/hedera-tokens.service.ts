import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { Client, TokenCreateTransaction, TokenInfoQuery } from '@hashgraph/sdk';

@Injectable()
export class HederaTokensService {
  private client: Client;

  constructor() {
    // Initialize the Hedera client
    this.client = Client.forTestnet();
    this.client.setOperator("0.0.4866106", "0xd964cbfd36c015a060123b0f991605bd869f313cfcd8c3787c498e7ea6b30a2a");
  }

  async createToken(createTokenDto) {  
      const { name, symbol, initialSupply, userId } = createTokenDto;  
  
      const transaction = new TokenCreateTransaction()  
          .setTokenName(name)  
          .setTokenSymbol(symbol)  
          .setInitialSupply(initialSupply)  
          .setTreasuryAccountId("0.0.4866106") 
          .setDecimals(0);
  
      const txResponse = await transaction.execute(this.client);  
      const receipt = await txResponse.getReceipt(this.client);  
      const tokenId = receipt.tokenId;  
  
      try
      {

        const mysql = require('mysql2/promise');  
      
        const connection = await mysql.createConnection({  
          host: 'psy.h.filess.io',  
          port: 3307,  
          user: 'proba_poolreport',  
          password: '89b90ee87ce6e03c1bbe420aebcabef774c140dc',  
          database: 'proba_poolreport',  
          connectTimeout: 10000,  
          waitForConnections: true, 
          connectionLimit: 10, 
          queueLimit: 0 
        });
    
      const [rows] = await connection.execute('INSERT INTO user_token (userId,tokenId) VALUES (?,?)', [userId,tokenId.toString()]);  
  
      await connection.end();  
    } catch (error) {  
      console.error('Error connecting to the database:', error);  
    }  
  
      return { tokenId: tokenId.toString() };  
  }


  
}
