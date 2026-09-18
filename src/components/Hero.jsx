import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Mail, Phone, ExternalLink, Database, RadioTower, ShieldCheck } from 'lucide-react'

const roles = [
  'Software Engineer - Full Stack Developer',
  'React.js + Node.js Developer',
  'Laravel Full Stack Developer',
  'Multi-Tenant SaaS Architect',
  'Real-Time Systems Builder',
  'REST API Specialist',
]

const impactStats = [
  { value: '2.5+', label: 'Years experience' },
  { value: '350+', label: 'Client organizations' },
  { value: '10K+', label: 'Government users' },
]

const domainCards = [
  { icon: Database, title: 'Production APIs', detail: 'REST APIs, RBAC, PostgreSQL, MySQL, Redis' },
  { icon: RadioTower, title: 'Real-Time Systems', detail: 'Socket.io tracking, chat, FCM and APNs' },
  { icon: ShieldCheck, title: 'Secure Workflows', detail: 'Healthcare, logistics, government and SaaS roles' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const canvasRef = useRef(null)

  useEffect(() => {
    const role = roles[roleIdx]
    let i = typing ? 0 : role.length
    let timer

    const tick = () => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1))
        i += 1
        if (i > role.length) {
          timer = setTimeout(() => setTyping(false), 1500)
          return
        }
      } else {
        setDisplayed(role.slice(0, i - 1))
        i -= 1
        if (i < 0) {
          setRoleIdx((p) => (p + 1) % roles.length)
          setTyping(true)
          return
        }
      }

      timer = setTimeout(tick, typing ? 58 : 28)
    }

    timer = setTimeout(tick, 120)
    return () => clearTimeout(timer)
  }, [roleIdx, typing])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const nodes = Array.from({ length: 44 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      opacity: Math.random() * 0.35 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45, 212, 191, ${p.opacity})`
        ctx.fill()
      })

      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 82) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(167, 139, 250, ${0.07 * (1 - d / 82)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-copy">
          <div className="eyebrow">Software Engineer - Full Stack Developer - React.js • Node.js • Laravel • PHP • PostgreSQL • MySQL</div>

          <h1>Reshanth A</h1>

          <div className="typewriter hero-role">
            <span>&lt;</span>
            <strong>{displayed}</strong>
            <span className="cursor">|</span>
            <span>/&gt;</span>
          </div>

          <p className="hero-summary">
            I build production web applications across healthcare, logistics, government,
            SaaS, inventory, and commerce. My work focuses on real-time systems, secure
            REST APIs, multi-tenant architecture, and role-based product workflows.
          </p>

          <div className="hero-actions">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <a href="mailto:reshiarumugam02@gmail.com">
              <Mail />
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            {impactStats.map((stat) => (
              <div key={stat.label} className="metric-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-panel" aria-label="Core strengths">
          <div className="availability-card">
            <span>Based in</span>
            <strong>Coimbatore, India</strong>
          </div>

          <div className="availability-card">
            <span>Available for</span>
            <strong>Frontend, Backend, and Full Stack roles</strong>
          </div>

          {domainCards.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="hero-capability">
              <div>
                <Icon />
              </div>
              <section>
                <h2>{title}</h2>
                <p>{detail}</p>
              </section>
            </div>
          ))}

          <div className="hero-socials">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reshanth-fullstack-developer/', icon: ExternalLink },
              { label: 'Email', href: 'mailto:reshiarumugam02@gmail.com', icon: Mail },
              { label: 'Phone', href: 'tel:+916382946217', icon: Phone },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                title={label}
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </aside>
      </div>

      <button
        className="hero-scroll"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to about section"
      >
        <ArrowDown />
      </button>
    </section>
  )
}
