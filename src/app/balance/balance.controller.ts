import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BalanceService } from './balance.service';
import { Balance } from './balance.interface';

@ApiTags('Balance')
@Controller()
export class BalanceController {
  constructor(
    private readonly balanceService: BalanceService
  ) {}

  @Get()
  @ApiOperation({ description: 'Get balance for the account' })
  public async find(@Query('account_id') account_id: number, @Res() res: Response) {
    const balance: Balance = this.balanceService.find(account_id)
    if(balance) {
      res.status(HttpStatus.OK).json(balance.amount);
    } else {
      res.status(HttpStatus.NOT_FOUND).json(0);
    }
  }
}
