const maxInstructionsWithRedux = (movements) => {
  const listOfMovementsX = { R: 1, L: -1 }
  const listOfMovementsY = { U: 1, D: -1 }

  const numbersX = movements
    .reduce((acc, curr) => {
      const lastCombination = [...acc[acc.length - 1]]
      const stepX = (listOfMovementsX[curr] ?? 0) + lastCombination[0]
      const stepY = (listOfMovementsY[curr] ?? 0) + lastCombination[1]
      return [...acc, [stepX, stepY]]
    }, [[0, 0]])
    .reduce((acc, curr) => {
      const sum = Math.abs(curr[0]) + Math.abs(curr[1])
      return sum > acc ? sum : acc
    }, 0)

  return numbersX || 0
}

module.exports = {
  maxInstructionsWithRedux
}
