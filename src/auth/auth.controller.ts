import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateTokenDto } from './auth.types';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  createToken(@Body() createTokenDto: CreateTokenDto) {
    while (true) {}
    return this.authService.createToken(createTokenDto);
  }
}
