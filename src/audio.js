import wedding from './config/wedding'
const TARGET = 0.35
let a = null, timer = null, listeners = new Set()
const state = { on: false, error: false }
const emit = () => listeners.forEach((f) => f({ ...state }))
export const subscribe = (f) => (listeners.add(f), () => listeners.delete(f))
function get() {
  if (a) return a
  a = new Audio(wedding.musicFile); a.loop = true; a.preload = 'none'; a.volume = 0
  a.addEventListener('error', () => { state.error = true; state.on = false; emit() })
  return a
}
function fade(to, done) {
  clearInterval(timer)
  timer = setInterval(() => {
    const d = to - a.volume
    if (Math.abs(d) < 0.03) { a.volume = to; clearInterval(timer); done && done() } else a.volume += Math.sign(d) * 0.03
  }, 50)
}
export async function play() {
  const el = get()
  try { await el.play(); state.on = true; state.error = false; fade(TARGET) } catch { state.on = false }
  emit()
}
export function pause() { if (!a) return; state.on = false; fade(0, () => a.pause()); emit() }
export const toggle = () => (state.on ? pause() : play())
