import { describe, expect, test } from 'vitest'

// when snapshots are generated Vitest reruns `toMatchInlineSnapshot` checks
// please, don't commit generated snapshots
describe('snapshots are generated in correct order', async () => {
  test('first snapshot', () => {
    expect({ foo: ['bar'] }).toMatchInlineSnapshot()
  })

  test('second snapshot', () => {
    expect({ foo: ['zed'] }).toMatchInlineSnapshot()
  })
})

describe('snapshots with properties', () => {
  test('without snapshot', () => {
    expect({ foo: 'bar' }).toMatchInlineSnapshot({ foo: expect.any(String) })
  })

  test('with snapshot', () => {
    expect({ foo: 'bar' }).toMatchInlineSnapshot({ foo: expect.any(String) }, '')
  })
})
