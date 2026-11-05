
import { useState, useEffect } from 'react'
import Envelope from './components/Envelope'
import Welcome from './components/Welcome'
import Navigation from './components/Navigation'
import Muhurtham from './components/Muhurtham'
import Reception from './components/Reception'
import BeegarOota from './components/BeegarOota'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

const variant = import.meta.env.VITE_INVITE_VARIANT || 'all'

const showMuhurtham = variant === 'all'
const showReception = ['all', 'reception-beegar', 'reception'].includes(variant)
const showBeegar = ['all', 'reception-beegar'].includes(variant)

export default function App() {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <>
      {!opened && <Envelope onDone={() => setOpened(true)} />}

      <main className={opened ? 'reveal' : 'pre'}>
        <Welcome />

        {showMuhurtham && <Muhurtham />}
        {showReception && <Reception />}
        {showBeegar && <BeegarOota />}

        <RSVP />
        <Footer />
      </main>

      {opened && <Navigation />}

      <MusicPlayer />
    </>
  )
}
