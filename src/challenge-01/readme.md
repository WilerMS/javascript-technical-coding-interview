# Mars Robot Movement Simulator

## Context

NASA has hired us and, as a company, we are in charge of sending our first robot to Mars. The robot has the ability to move one meter in each direction with the commands Left (L), Right (R), Up (U), Down (D).

## Problem

NASA is preparing a list of indications for the robot's movement from the charging base, which is marked as point 0. However, there is a concern: in case of an emergency, the robot may not have enough time to return to the charging base. Therefore, we need to evaluate the robot's movements in a simulator and determine the maximum number of instructions that we should send to the robot when it is at its furthest point, to ensure that it can return to the base.

## Task

1. Calculate what is the maximum number of instructions that should be sent to the robot so that, at some point in the journey, it can return to the base.

2. Implement a function that performs the required task. This function will receive a list of plans to execute. Each plan consists of a series of movement commands for the robot.

3. The function should evaluate each plan and return a list with the maximum number of instructions that should be sent to the robot for each plan, ensuring that the robot can return to the base at any time.

## Input Format

The input will be a list of lists, where each inner list represents a movement plan for the robot. Each movement plan is a sequence of commands, where each command is one of the following letters: 'L', 'R', 'U', 'D'.

## Output Format

The output will be a list of integers, where each number represents the maximum number of instructions that should be sent to the robot for each movement plan, ensuring that the robot can return to the base at any time.
