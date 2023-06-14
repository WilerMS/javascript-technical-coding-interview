/**
 * calculate the functions Ricardo is going to finish
 * @param {number} F Amount of functions Ricardo writes each day
 * @param {number} R Amount of functions Ricardo removes each day at the end of the shift
 * @param {number} D Number of days to finish
 * @param {number} T Totalamount of functions the client expect finished by Ricardo
 */
const willRicaldoDoIt = (D, T, F, R) => ((F - R) * D) >= T

module.exports = {
  willRicaldoDoIt
}
