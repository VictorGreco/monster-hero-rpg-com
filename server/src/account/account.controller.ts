import { Controller, Body, Post } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('create')
  create(@Body() params) {
    return this.accountService.create(params);
  }
}
