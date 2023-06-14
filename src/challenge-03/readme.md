# Maximizing Task Duration: A Data Recovery Challenge

## Summary

Diego, a project leader, has been diligently tracking the estimations of tasks assigned to different teams and members in an Excel file. Unfortunately, this file got corrupted and couldn't be recovered. However, from weekly summaries to his boss, Diego has certain data available. The challenge is to develop a program that, using this available data, determines what the maximum duration of one of the tasks could be for a presentation with the client.

## Problem Description

Each week, Diego would present his boss with a summary detailing, by team, the number of tasks that had been assigned, the arithmetic average of the task estimations in hours, and the duration of the task with the lowest estimation. Now, Diego needs to know what the maximum duration of one of the tasks can be for a presentation with the client that is taking place today.

## Tasks to be Performed

- Develop a function that receives a list of teams with three values each and returns a list that represents the maximum duration of the tasks for each team.

## Input Data

The function will receive a list of teams. Each team will be represented by an array with three values:

- `team[i][0]` = (N) The number of tasks assigned to the team
- `team[i][1]` = (T) The average number of hours of the tasks in the team
- `team[i][2]` = (R) The duration in hours of the smallest task in team i

## Output Data

The function should return a list that represents the maximum duration of the tasks for each team.
