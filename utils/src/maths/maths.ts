export const sum = (...nums: number[]): number =>
  nums.reduce((result, num) => result + num)

export const product = (...nums: number[]): number =>
  nums.reduce((result, num) => result * num)

export const factorial = (n: number): number =>
  n <= 1 ? 1 : n * factorial(n - 1)
