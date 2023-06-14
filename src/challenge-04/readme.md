# Exponential Loan Repayment Time Estimator

## Summary
A newly launched, fee-free, and interest-free loan application is experimenting with an innovative repayment scheme. This scheme requires the borrower to pay one unit of currency on the first day and to double their payment each subsequent day. On the final day, the borrower only pays the remaining balance, if any. The application team needs a feature to estimate the repayment period for any given loan amount under this scheme.

## Problem Description
The application's unique loan scheme initiates with a single unit of currency payment on the first day. For every following day, the payment doubles from the previous day's amount. Once the borrower reaches the final day, they are required to pay off the remaining balance, if any. The goal is to develop a feature that calculates the total repayment duration using this payment method.

## Tasks
Given a number N (representing the initial loan amount), your task is to implement a function that returns an integer representing the number of days needed to fully repay the loan.

## Input
The function will receive a list of integers, each integer representing a loan amount to be simulated.

**Example**
```
Input: [10, 100, 500]
```

## Output
The function should return a list of integers, each representing the number of days required to fully repay the corresponding loan.

**Example**
```
Output: [4, 7, 10]
```

## Function Signature
Complete the function provided in your code editor. The function should receive the list of loan amounts and return a list that indicates the number of days necessary to fully repay each respective loan.
