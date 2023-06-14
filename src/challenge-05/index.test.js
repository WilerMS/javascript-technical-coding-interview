const { countUniqueElements } = require('.')

/* eslint-disable no-undef */
describe('challenge-5 countUniqueElements()', () => {
  test('0 -> 0', () => {
    expect(countUniqueElements([1, 2, 3, 4, 5])).toBe(5)
  })

  test('1 -> 1', () => {
    expect(countUniqueElements([0, 2, 0, 4, 0])).toBe(3)
  })

  test('2 -> 2', () => {
    expect(countUniqueElements([1, 1, 1, 1])).toBe(1)
  })
})
