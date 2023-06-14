const { willRicaldoDoIt } = require('.')

/* eslint-disable no-undef */
describe('challenge-2 willRicaldoDoIt()', () => {
  test('Ricardo should be able to complete his tasks in time', () => {
    expect(willRicaldoDoIt(5, 20, 5, 1)).toBe(true)
  })

  test('Ricardo should not be able to complete his tasks in time', () => {
    expect(willRicaldoDoIt(5, 30, 5, 2)).toBe(false)
  })

  test('Ricardo should be able to complete his tasks even if he writes and deletes the same amount of functions per day', () => {
    expect(willRicaldoDoIt(5, 0, 5, 5)).toBe(true)
  })
})
