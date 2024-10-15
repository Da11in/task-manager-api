import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import type { CreateTokenDto } from './schemas/auth.schema';

@Injectable()
export class AuthService {
  createToken(createTokenDto: CreateTokenDto) {
    const claims = { sub: createTokenDto.email };

    const accessToken = jwt.sign(claims, 'my-access-token-secret-key', {
      expiresIn: '5m',
    });

    const refreshToken = jwt.sign(claims, 'my-refresh-token-secret-key', {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }
}
