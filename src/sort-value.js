'use strict'

import Decimal from 'decimal.js'

const DECIMAL_LIMIT = 25

// Return a value between a and b or null if the number is larger than expected
export default function (after, before, options = { decimalLimit: DECIMAL_LIMIT }) {
  if (options.decimalLimit > DECIMAL_LIMIT) {
    throw Error(`Maximum tested decimalLimit is ${DECIMAL_LIMIT}`)
  }

  let newKeyValue = 0
  let newKey

  if (after === undefined && before === undefined) {
    return newKeyValue
  }

  if (after === undefined) {
    newKeyValue = before - 1
    after = before - 2
  } else if (before === undefined) {
    newKeyValue = after + 1
    before = after + 2
  } else {
    newKeyValue = after + (before - after) / 2
  }

  let tempKey = new Decimal(newKeyValue)
  newKey = tempKey

  do {
    if (tempKey.decimalPlaces() < 1) {
      break
    }

    // remove 1 decimal place
    tempKey = tempKey.toDecimalPlaces(tempKey.decimalPlaces() - 1)

    if (tempKey.toNumber() > after && tempKey.toNumber() < before) {
      newKeyValue = tempKey.toNumber()
      newKey = tempKey
    }
  } while (tempKey.toNumber() > after && tempKey.toNumber() < before)

  if (newKey && newKey.decimalPlaces() > options.decimalLimit) {
    return null
  }

  return newKeyValue
}
