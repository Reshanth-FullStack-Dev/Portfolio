import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.toLowerCase()))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navLinks[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setActive(link)
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '10px 40px' : '20px 40px',
      background: scrolled ? 'rgba(5,4,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all var(--transition-med)',
    }}>
      <div
        style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: '22px', letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, var(--purple-400), var(--pink-400))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={() => handleNav('Home')}
      >
        RA
      </div>

      {/* Desktop nav */}
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map(link => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400,
              color: active === link ? 'var(--purple-300)' : 'var(--text-secondary)',
              padding: '6px 14px', borderRadius: '100px',
              background: active === link ? 'rgba(139,92,246,0.12)' : 'transparent',
              border: active === link ? '1px solid var(--border-medium)' : '1px solid transparent',
              transition: 'all var(--transition-fast)',
              letterSpacing: '0.3px',
            }}
            onMouseEnter={e => {
              if (active !== link) {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.background = 'rgba(139,92,246,0.06)'
              }
            }}
            onMouseLeave={e => {
              if (active !== link) {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.background = 'transparent'
              }
            }}
          >
            {link}
          </button>
        ))}
        <a
          href="mailto:reshiarumugam02@gmail.com"
          style={{
            marginLeft: '8px',
            padding: '7px 20px', borderRadius: '100px',
            background: 'linear-gradient(135deg, var(--purple-600), var(--violet-500))',
            color: 'white', fontSize: '14px', fontWeight: 500,
            border: 'none', display: 'inline-block',
            boxShadow: '0 0 20px rgba(139,92,246,0.3)',
            transition: 'all var(--transition-fast)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(139,92,246,0.55)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(139,92,246,0.3)'}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
        className="hamburger"
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '24px', height: '2px',
            background: 'var(--purple-400)', borderRadius: '2px',
            transition: 'all var(--transition-fast)',
            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                       menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' :
                       menuOpen && i === 1 ? 'scaleX(0)' : 'none',
          }} />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(10,8,24,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '15px',
                color: active === link ? 'var(--purple-300)' : 'var(--text-secondary)',
                padding: '10px 16px', textAlign: 'left', borderRadius: '8px',
                background: active === link ? 'rgba(139,92,246,0.12)' : 'transparent',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}