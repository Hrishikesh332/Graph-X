import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { DailyCheckin } from "../generated/schema"
import { DailyCheckin as DailyCheckinEvent } from "../generated/DelabsDailyJourney/DelabsDailyJourney"
import { handleDailyCheckin } from "../src/delabs-daily-journey"
import { createDailyCheckinEvent } from "./delabs-daily-journey-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let walletAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDailyCheckinEvent = createDailyCheckinEvent(walletAddress)
    handleDailyCheckin(newDailyCheckinEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DailyCheckin created and stored", () => {
    assert.entityCount("DailyCheckin", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DailyCheckin",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "walletAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
