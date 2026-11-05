import { useEffect, useState } from 'react'
import { Music2, VolumeX } from 'lucide-react'
import * as bgm from '../audio'
export default function MusicPlayer() {
  const [s, setS] = useState({ on: false, error: false })
  useEffect(() => bgm.subscribe(setS), [])
  return (
    <button className={`music ${s.on ? 'playing' : ''}`} onClick={bgm.toggle} aria-pressed={s.on}
      aria-label={s.error ? 'Music unavailable' : s.on ? 'Turn music off' : 'Turn music on'} title={s.error ? 'Music file missing' : ''}>
      {s.on ? <Music2 size={22} /> : <VolumeX size={22} />}
    </button>
  )
}
