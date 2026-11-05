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

export default function App() {
  const [opened, setOpened] = useState(false)
  useEffect(() => { document.body.style.overflow = opened ? '' : 'hidden' }, [opened])
  return (
    <>
      {!opened && <Envelope onDone={() => setOpened(true)} />}
      <main className={opened ? 'reveal' : 'pre'}>
        <Welcome />
        <Muhurtham />
        <Reception />
        <BeegarOota />
        <RSVP />
        <Footer />
      </main>
      {opened && <Navigation />}
      <MusicPlayer />
    </>
  )
}
