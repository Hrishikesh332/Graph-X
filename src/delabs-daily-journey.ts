import {
  DailyCheckin as DailyCheckinEvent,
  DailyDraw as DailyDrawEvent
} from "../generated/DelabsDailyJourney/DelabsDailyJourney"
import { DailyCheckin, DailyDraw } from "../generated/schema"

export function handleDailyCheckin(event: DailyCheckinEvent): void {
  let entity = new DailyCheckin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.walletAddress = event.params.walletAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDailyDraw(event: DailyDrawEvent): void {
  let entity = new DailyDraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.walletAddress = event.params.walletAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
