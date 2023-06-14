const calculateDaysToPayDebt = (amount) => {
  let paid = 1; let debt = amount; let days = 0
  while (debt > 0) {
    debt -= paid
    paid *= 2
    days++
  }
  return days
}

module.exports = {
  calculateDaysToPayDebt
}
