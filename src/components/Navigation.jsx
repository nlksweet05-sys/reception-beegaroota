import { useEffect, useState } from 'react'
const items = [['home', 'Home'], ['muhurtham', 'Muhurtham'], ['reception', 'Reception'], ['beegar', 'Beegar Oota'], ['rsvp', 'RSVP']]
export default function Navigation() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { threshold: 0.45 })
    items.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <nav className="nav" aria-label="Sections">
      {items.map(([id, l]) => <button key={id} className={active === id ? 'on' : ''} aria-current={active === id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}>{l}</button>)}
    </nav>
  )
}
