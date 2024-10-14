import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('token')
  createToken() {
    return 'TOKEN';
  }
}
