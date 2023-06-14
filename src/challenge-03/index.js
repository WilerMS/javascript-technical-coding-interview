const maxTasksTime = (teams) => {
  return teams.map((team) => {
    const [total, average, minDuration] = team
    const totalHours = total * average
    const minTime = minDuration * (total - 1)
    return totalHours - minTime
  })
}

module.exports = {
  maxTasksTime
}
