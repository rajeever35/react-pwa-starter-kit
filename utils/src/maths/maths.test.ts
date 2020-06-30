import {sum} from './maths'
import {assert} from 'chai'

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const actual = sum(1, 2)
    const expected = 3
    assert.strictEqual(actual, expected)
  })
  it('should return the sum of three numbers', () => {
    const actual = sum(1, 2, 3)
    const expected = 6
    assert.strictEqual(actual, expected)
  })
  it('should throw error if no numbers provided', () => {
    assert.throws(sum)
  })
})
