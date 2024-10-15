import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createTokenSchema, CreateTokenDto } from './schemas/auth.schema';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @UsePipes(new ZodValidationPipe(createTokenSchema))
  createToken(@Body() createTokenDto: CreateTokenDto) {
    return this.authService.createToken(createTokenDto);
  }
}
