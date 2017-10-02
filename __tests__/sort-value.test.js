// Always run from the compiled version which is the one published
import sortValue from '../lib/sort-value'

describe('sort-value', () => {
  it('works on empty list', () => {
    let result = sortValue()

    expect(result).toEqual(0)
  })

  it('works when adding to the beggining', () => {
    let result = sortValue(undefined, 0)

    expect(result).toEqual(-1)
  })

  it('works when adding to the beggining not zero', () => {
    let result = sortValue(undefined, -52.6234)

    expect(result).toEqual(-54)
  })

  it('works when adding to the end', () => {
    let result = sortValue(0, undefined)

    expect(result).toEqual(1)
  })

  it('works between two integers', () => {
    const after = 0
    const before = 1
    const expected = 0.5
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between integer and decimal', () => {
    const after = 0
    const before = 0.5
    const expected = 0.3
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between integer and decimal', () => {
    const after = 0
    const before = 0.3
    const expected = 0.2
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between integer and decimal', () => {
    const after = 0
    const before = 0.2
    const expected = 0.1
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between integer and decimal', () => {
    const after = 0
    const before = 0.1
    const expected = 0.05
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between integer and decimal', () => {
    const after = 0
    const before = 0.05
    const expected = 0.03
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between integer and decimal', () => {
    const after = 0
    const before = 0.00001
    const expected = 0.000005
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between large decimals', () => {
    const after = 0.00000000000000001
    const before = 0.00000000000000003
    const expected = 0.00000000000000002
    let result = sortValue(after, before)

    console.log(`Here: ${result}`)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between negative numbers resulting in integer', () => {
    const after = -7.53
    const before = -1.4357
    const expected = -5
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('works between negative numbers resulting in decimal', () => {
    const after = -7.53
    const before = -7.4357
    const expected = -7.5
    let result = sortValue(after, before)

    expect(result).toBeGreaterThan(after)
    expect(result).toBeLessThan(before)
    expect(result).toEqual(expected)
  })

  it('Errors out when it reaches the limit of decimal places', () => {
    const after = 0
    const before = 0.0000000000000000000000001
    const expected = null
    let result = sortValue(after, before)

    expect(result).toEqual(expected)
  })
})
