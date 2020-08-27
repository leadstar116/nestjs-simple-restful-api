import { Injectable } from '@nestjs/common';
import { BalanceService } from '../balance/balance.service';
import { DepositEvent, Event, EventType, TransferEvent, WithdrawEvent } from './event.interface';

@Injectable()
export class EventService {
  private balanceService: BalanceService = BalanceService.getInstance()

  create(event: Event) {
    if(event.type == EventType.deposit) {
      return this.depositEvent(event);
    } else if(event.type == EventType.transfer) {
      return this.transferEvent(event);
    } else if(event.type == EventType.withdraw) {
      return this.withdrawEvent(event);
    }
  }

  withdrawEvent(event: WithdrawEvent) {
    if(!this.balanceService.find(event.origin)) return false;
    return this.balanceService.withdraw(event.origin, event.amount);
  }

  transferEvent(event: TransferEvent) {
    if(!this.balanceService.find(event.origin)) return false;
    return this.balanceService.transfer(event.origin, event.destination, event.amount);
  }

  depositEvent(event: DepositEvent) {
    return this.balanceService.deposit(event.destination, event.amount);
  }
}
