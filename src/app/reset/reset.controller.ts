import { Controller, Post, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BalanceService } from '../balance/balance.service';

@ApiTags('Reset')
@Controller()
export class ResetController {
  private balanceService: BalanceService = BalanceService.getInstance()

  @Post()
  @ApiOperation({ description: 'Reset state before starting tests' })
  public async reset(@Res() res: Response) {
    this.balanceService.reset()
    res.status(HttpStatus.OK).json('OK');
  }
}
