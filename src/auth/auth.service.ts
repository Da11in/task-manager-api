import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './auth.types';

@Injectable()
export class AuthService {
  createToken(createTokenDto: CreateTokenDto) {
    if (
      createTokenDto.login === 'admin' &&
      createTokenDto.password === 'admin'
    ) {
      return { token: 'admin' };
    }

    return { token: 'user' };
  }
}
