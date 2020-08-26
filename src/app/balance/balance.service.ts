import { Injectable } from '@nestjs/common';
import { Balance } from './balance.interface';

@Injectable()
export class BalanceService {
  private balanceArray: Array<Balance> = [];

  find(id: number): Balance{
    return this.balanceArray.find(e => e.accountId === id);
  }
}
