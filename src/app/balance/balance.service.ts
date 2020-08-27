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

  find(id: string): Balance{
    return this.balanceArray.find(e => e.id == id);
  }

  changeAmount(id: string, amount: number, type: number) {
    this.balanceArray.map(e => {
      (e.id === id)
        ? e.amount = e.amount + type * amount
        : e.amount
    });
  }

  withdraw(id: string, amount: number) {
    this.changeAmount(id, amount, -1);

    return { 'origin': this.find(id) };
  }

  transfer(origin: string, destination: string, amount: number) {
    this.changeAmount(origin, amount, -1);
    this.deposit(destination, amount);

    return { 'origin': this.find(origin), 'destination': this.find(destination) };
  }

  deposit(id: string, amount: number) {
    if(this.find(id)) {
      this.changeAmount(id, amount, 1);
    } else {
      this.balanceArray.push({
        id: id,
        amount
      });
    }

    return { 'destination': this.find(id) };
  }
}
