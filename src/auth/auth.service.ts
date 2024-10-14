import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './auth.types';

@Injectable()
export class AuthService {
  createToken(createTokenDto: CreateTokenDto) {
    const payload = { login: createTokenDto.login, role: 'admin' }; // or 'user'
    const token = jwt.sign(payload, 'my-secret-key', { expiresIn: '1h' });
    return { token };
  }
}
