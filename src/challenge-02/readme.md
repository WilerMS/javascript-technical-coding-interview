# Predicting Developer's Work Completion: A Ricardo's Peculiarity Case

## Summary

We are dealing with a developer, Ricardo, who has a peculiar habit of writing a number of functions and then deleting some of them on the same day. His productivity, however, is consistent, and he doesn't refactor any function once completed. The challenge is to create a program that predicts whether Ricardo will be able to complete a specific amount of functions within a given timeframe.

## Problem Description

Ricardo is a member of our development team, highly productive but with a particular tendency. He can write a fixed number, F, of new functions each day, but his innate drive leads him to delete an R number of those functions at the end of his day. Surprisingly, once his daily work is finished, he doesn't refactor any additional functions but sends the pull to request a review.

Everyone in the team admires Ricardo's work. However, the team's architect is worried about whether he will be able to meet the deadlines assigned based on his current work pace. We have been asked to create a program that can predict whether Ricardo will be able to meet his work quota.

## Tasks to be Performed

- Develop an algorithm that can determine whether Ricardo will be able to meet his quota of functions, taking into account his work pace.
- The algorithm must calculate whether Ricardo can deliver the total number of functions that the client expects within the number of days available for delivery.

## Input Data

- A number D corresponding to the number of days in the delivery deadline.
- A number T representing the total number of functions Ricardo is expected to complete.
- A number F corresponding to the number of new functions Ricardo can write per day.
- A number R representing the number of functions Ricardo will delete each day at the end of his work.

## Output Data

- The answer should be a boolean value indicating whether Ricardo will be able to meet or not the assigned tasks, given his peculiar way of working.
