import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  DailyCheckin,
  DailyDraw
} from "../generated/DelabsDailyJourney/DelabsDailyJourney"

export function createDailyCheckinEvent(walletAddress: Address): DailyCheckin {
  let dailyCheckinEvent = changetype<DailyCheckin>(newMockEvent())

  dailyCheckinEvent.parameters = new Array()

  dailyCheckinEvent.parameters.push(
    new ethereum.EventParam(
      "walletAddress",
      ethereum.Value.fromAddress(walletAddress)
    )
  )

  return dailyCheckinEvent
}

export function createDailyDrawEvent(walletAddress: Address): DailyDraw {
  let dailyDrawEvent = changetype<DailyDraw>(newMockEvent())

  dailyDrawEvent.parameters = new Array()

  dailyDrawEvent.parameters.push(
    new ethereum.EventParam(
      "walletAddress",
      ethereum.Value.fromAddress(walletAddress)
    )
  )

  return dailyDrawEvent
}
