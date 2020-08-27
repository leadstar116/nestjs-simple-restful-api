import { IsString, IsNotEmpty, IsNumber } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { EventType } from './event.interface'

export class EventDto {
  @ApiProperty({
    enum: EventType,
    description: 'Event Type'
  })
  @IsNotEmpty()
  type: EventType

  @ApiPropertyOptional({
    name: 'origin',
    description: 'Origin account id',
  })
  origin: string

  @ApiPropertyOptional({
    name: 'destination',
    description: 'Desired account id',
  })
  destination: string

  @ApiProperty({
    name: 'amount',
    description: 'Amount',
  })
  amount: number
}
