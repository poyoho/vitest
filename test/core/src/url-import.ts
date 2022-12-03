import externalWasm from 'jsmpeg-lite/jsmpeg.wasm?url'
import localWasm from './add.wasm?url'

export function urls() {
  return {
    externalWasm,
    localWasm,
  }
}
