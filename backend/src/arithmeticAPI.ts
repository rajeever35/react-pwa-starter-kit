import {Request, Response} from 'express'
import {factorial, product, sum} from 'utils'

interface ArithmeticRequest {
  nums: Array<number>
}

interface ArithmeticResponse {
  sum: number
  product: number
  factorials: Record<number, number>
}

export default (
  req: Request<[], unknown, ArithmeticRequest>,
  res: Response
): Response<ArithmeticResponse> =>
  res.json({
    sum: sum(...req.body.nums),
    product: product(...req.body.nums),
    factorials: req.body.nums.reduce(
      (acc, num) => ({...acc, [num]: factorial(num)}),
      {}
    ),
  })
