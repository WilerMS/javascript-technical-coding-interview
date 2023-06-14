const { calculateDaysToPayDebt } = require('.')

/* eslint-disable no-undef */
describe('challenge-2 willRicaldoDoIt()', () => {
  test('0 -> 0', () => {
    expect(calculateDaysToPayDebt(0)).toBe(0)
  })

  test('1 -> 1', () => {
    expect(calculateDaysToPayDebt(1)).toBe(1)
  })

  test('2 -> 2', () => {
    expect(calculateDaysToPayDebt(2)).toBe(2)
  })

  test('3 -> 2', () => {
    expect(calculateDaysToPayDebt(3)).toBe(2)
  })

  test('4 -> 3', () => {
    expect(calculateDaysToPayDebt(4)).toBe(3)
  })
})
