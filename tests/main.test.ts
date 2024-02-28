import {hello} from '../src/index'

describe('hello test', () => {
  test('OK', async () => {
    const res = hello('yossy')
    expect(res).toBe('Hello yossy!!')
  })
})
