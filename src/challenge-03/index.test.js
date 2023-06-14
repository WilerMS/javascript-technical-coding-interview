/* eslint-disable no-undef */
const { maxTasksTime } = require('.')

describe('Test for maxTasksTime function', () => {
  test('[2, 2, 1], [3, 2, 1]', () => {
    const teams = [
      [2, 2, 1],
      [3, 2, 1]
    ]
    expect(maxTasksTime(teams)).toEqual([3, 4])
  })

  test('Should handle teams with one task', () => {
    const teams = [
      [1, 5, 5],
      [1, 3, 3],
      [1, 7, 7]
    ]
    expect(maxTasksTime(teams)).toEqual([5, 3, 7])
  })
})
