import { expect, it } from 'vitest'
import { urls } from '../src/url-import'

it('wasm urls', () => {
  expect(urls().localWasm).toMatchInlineSnapshot('"/src/add.wasm"')
  expect(urls().externalWasm).toMatchInlineSnapshot('"/@fs/jsmpeg-lite/jsmpeg.wasm"')
})
