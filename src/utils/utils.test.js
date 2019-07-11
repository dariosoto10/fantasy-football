import inRange from './inRange'
import verifyObject from './verifyObject'
import randomNumber from './randomNumber'
import testRegex from './regex'

describe('#inRange function', () => {
  it('should return true if the number is inside the range or false if the number is outside the range', () => {
    expect(inRange(5, 1, 10)).toBe(true)
    expect(inRange(12, 1, 10)).toBe(false)
  })
})

describe('#verifyObject function', () => {
  it('should return true if the object contains at least a value or false if the object does not contain any value', () => {
    const objWithValue = {
      name: 'fantasy-football'
    }

    expect(verifyObject(objWithValue)).toBe(true)

    const objWithoutValue = {
      name: ''
    }

    expect(verifyObject(objWithoutValue)).toBe(false)
  })
})

describe('#randomNumber function', () => {
  it('should return a number', () => {
    expect(randomNumber(1, 10)).not.toBeNaN()
  })

  it('should return a number inside a range', () => {
    const number = randomNumber(1, 10)
    expect(inRange(number, 1, 10)).toBe(true)
  })
})

describe('#testRegex function', () => {
  it('should return true if the first string it is a substring from the second string otherwise return false', () => {
    expect(testRegex('fantasy', 'fantasy-football')).toBe(true)
    expect(testRegex('fantasy--', 'fantasy-football')).toBe(false)
  })
})
