import { describe, expect, it } from 'vitest'
import { urls } from '../src/url-import'

describe('url-import', () => {
  it('builder', () => {
    expect(urls().localWasm).toMatchInlineSnapshot('"/src/add.wasm"')
    expect(urls().externalWasm).toMatchInlineSnapshot('"/@fs/jsmpeg-lite/jsmpeg.wasm"')
  })
})
