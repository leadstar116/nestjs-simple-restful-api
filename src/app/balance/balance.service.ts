import { Injectable } from '@nestjs/common';
import e = require('express');
import { Balance } from './balance.interface';

@Injectable()
export class BalanceService {
  private balanceArray: Array<Balance> = [];
  static instance;

  static getInstance() {
    if(BalanceService.instance) return BalanceService.instance;
    BalanceService.instance = new BalanceService;
    return BalanceService.instance;
  }

  find(id: number): Balance{
    return this.balanceArray.find(e => e.accountId == id);
  }

  changeAmount(id: number, amount: number, type: number) {
    this.balanceArray.map(e => {
      (e.accountId === id)
        ? e.amount = e.amount + type * amount
        : e.amount
    });
  }

  withdraw(id: number, amount: number) {
    this.changeAmount(id, amount, -1);

    return { 'origin': this.find(id) };
  }

  transfer(origin: number, destination: number, amount: number) {
    this.changeAmount(origin, amount, -1);
    this.deposit(destination, amount);

    return { 'origin': this.find(origin), 'destination': this.find(destination) };
  }

  deposit(id: number, amount: number) {
    if(this.find(id)) {
      this.changeAmount(id, amount, 1);
    } else {
      this.balanceArray.push({
        accountId: id,
        amount
      });
    }

    return { 'destination': this.find(id) };
  }
}
