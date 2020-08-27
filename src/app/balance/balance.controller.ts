import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
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
  private balanceService: BalanceService = BalanceService.getInstance();

  @Get()
  @ApiOperation({ description: 'Get balance for the account' })
  public async find(@Query('account_id') account_id: string, @Res() res: Response) {
    const balance: Balance = this.balanceService.find(account_id);
    if(balance) {
      res.status(HttpStatus.OK).json(balance.amount);
    } else {
      res.status(HttpStatus.NOT_FOUND).json(0);
    }
  }
}
