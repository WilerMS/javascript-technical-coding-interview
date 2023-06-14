const { maxInstructionsWithRedux } = require('.')

/* eslint-disable no-undef */
describe('challenge-1 getMaxMovementsFromFurtherPoint()', () => {
  test('[\'R\', \'R\', \'U\', \'U\'] -> 4', () => {
    expect(maxInstructionsWithRedux(['R', 'R', 'U', 'U'])).toBe(4) // Success
  })
  test('[\'R\', \'R\', \'U\', \'L\'] -> 4', () => {
    expect(maxInstructionsWithRedux(['R', 'R', 'U', 'L'])).toBe(3) // Success
  })
  test('[\'L\', \'U\', \'L\', \'L\', \'R\', \'U\'] -> 4', () => {
    expect(maxInstructionsWithRedux(['L', 'U', 'L', 'L', 'R', 'U'])).toBe(4) // Success
  })
  test('[\'R\', \'U\', \'L\', \'D\'] -> 4', () => {
    expect(maxInstructionsWithRedux(['R', 'U', 'L', 'D'])).toBe(2) // Success
  })
})
